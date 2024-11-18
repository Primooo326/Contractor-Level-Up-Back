import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiResponseDataHelper } from 'src/common/helpers/api-response-data.helper';
import * as crypto from 'crypto';
import { ConUser } from 'src/db/con-entities/con-user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(ConUser, 'CON')
        private repositoryConUser: Repository<ConUser>,
        private jwtService: JwtService,
    ) { }

    async login(userObject: LoginAuthDto) {
        const { email, password } = userObject;

        const repository = this.repositoryConUser;
        const alias = repository.metadata.tableName.toLowerCase();
        const findUser = await repository.createQueryBuilder(alias)
            .where(`${alias}.state = :state`, { state: true })
            .andWhere(`${alias}.email = :input`, { input: email })
            .getOne();

        if (!findUser) return ApiResponseDataHelper.sendError('Usuario no encontrado');

        const encrypted = await this.encryptPasword(password);

        if (encrypted !== findUser.password) return ApiResponseDataHelper.sendError('Contraseña incorrecta');

        const payload = { userId: findUser.id };
        const token = this.jwtService.sign(payload, {
            expiresIn: '1d',
        });

        const resetPass: boolean = await this.validateUpdatePass(
            findUser.last_password_update,
        );

        return { resetPass, token, user: findUser };
    }

    private validateUpdatePass(susuUpdatePass: Date): boolean {
        const currentDate = new Date();
        const updatedPassDate = new Date(susuUpdatePass);
        const differenceInMs = currentDate.getTime() - updatedPassDate.getTime();
        const daysPassed = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
        const resetPassThreshold = 30;
        let resetPass: boolean = false;

        if (!susuUpdatePass || daysPassed > resetPassThreshold) {
            resetPass = true;
        }

        return resetPass;
    }

    async encryptPasword(text: string): Promise<string> {
        const algorithm = 'aes-256-ecb';
        const encryptionKey = process.env.ENCRYPTION_KEY;
        const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryptionKey), null);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
}
