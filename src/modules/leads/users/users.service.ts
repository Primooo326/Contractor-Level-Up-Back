import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageMetaDto } from 'src/common/dtos-globals/page-meta.dto';
import { PageOptionsDto } from 'src/common/dtos-globals/page-options.dto';
import { ApiResponseDataHelper } from 'src/common/helpers/api-response-data.helper';
import { ResponseTypedApis } from 'src/common/interfaces/api-response-typed.interface';
import { ConUser } from 'src/db/con-entities/con-user.entity';
import { Brackets, Repository } from 'typeorm';
import { CreOrUpdUserDto } from './dto/cre-upd-user.dto';
import { UserLoginDto } from 'src/common/dto/user-login.dto';
import * as crypto from 'crypto';
import { ChangePassDto } from './dto/change-pass.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(ConUser, 'CON') private repositoryConUser: Repository<ConUser>,
    ) { }

    async changePassword(dto: ChangePassDto, user: UserLoginDto) {
        const { newPassword, repeatPassword } = dto;

        if (newPassword !== repeatPassword) throw new NotFoundException(`Las contraseñas no coinciden`);

        const findUser = await this.repositoryConUser.findOne({
            where: { id: user.userId },
        });

        const encryptedPassword = await this.encryptPassword(newPassword);

        if (encryptedPassword === findUser.password) throw new NotFoundException(`La contraseña no puede ser igual a la anterior`);

        const now = new Date();
        now.setHours(now.getHours() - 5);

        await this.repositoryConUser.update({id: user.userId}, {
            password: encryptedPassword,
            last_password_update: now
        })

        return ApiResponseDataHelper.sendSuccess(user, 'Contraseña actualizada con éxito');
    }

    public async findAll(pageOptionsDto: PageOptionsDto, user: UserLoginDto): Promise<ResponseTypedApis> {
        try {
            const queryBuilder = this.repositoryConUser.createQueryBuilder('query')
                .where(
                    new Brackets(qb => {
                        qb.where('(query.full_name LIKE :term)', { term: `%${pageOptionsDto.term}%` })
                        qb.orWhere('(query.first_name LIKE :term)', { term: `%${pageOptionsDto.term}%` })
                        qb.orWhere('(query.last_name LIKE :term)', { term: `%${pageOptionsDto.term}%` })
                    })
                )
                .andWhere('query.state = :state', { state: true })
                .orderBy('query.id', pageOptionsDto.order)
                .skip(pageOptionsDto.skip)
                .take(pageOptionsDto.take);

            const itemCount = await queryBuilder.getCount();
            const { entities } = await queryBuilder.getRawAndEntities();
            const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

            return ApiResponseDataHelper.sendSuccessPaginated(entities, pageMetaDto);
        } catch (error) {
            return ApiResponseDataHelper.sendError('Ocurrió un error al obtener los usuarios');
        }
    }

    public async findOne(id: number, user: UserLoginDto): Promise<ResponseTypedApis> {
        try {
            const data = await this.repositoryConUser.createQueryBuilder('query')
                .where('query.id = :id', { id })
                .andWhere('query.state = :state', { state: true })
                .getOne();

            if (!data) {
                return ApiResponseDataHelper.sendNotFound();
            }

            return ApiResponseDataHelper.sendSuccess(data);
        } catch (error) {
            return ApiResponseDataHelper.sendError('Ocurrió un error al obtener el usuario');
        }
    }

    public async create(dto: CreOrUpdUserDto, user: UserLoginDto): Promise<ResponseTypedApis> {
        try {
            const exist = await this.repositoryConUser.createQueryBuilder('query')
                .where('query.email = :email', { email: dto.email })
                .andWhere('query.state = :state', { state: true })
                .getOne();

            if (exist) {
                return ApiResponseDataHelper.sendConflict('El correo ingresado ya existe');
            }

            const password = await this.encryptPassword(`${dto?.first_name}_${new Date().getFullYear()}`);

            const created = this.repositoryConUser.create({
                proyects_id: 2,
                full_name: `${dto.first_name} ${dto.last_name}`,
                first_name: dto.first_name,
                last_name: dto.last_name,
                is_admin: dto.is_admin,
                email: dto.email,
                password: password
            });

            await this.repositoryConUser.save(created);

            return ApiResponseDataHelper.sendCreated(created);
        } catch (error) {
            return ApiResponseDataHelper.sendError(error.message);
        }
    }

    public async update(id: number, dto: CreOrUpdUserDto, user: UserLoginDto): Promise<ResponseTypedApis> {
        try {
            const user = await this.repositoryConUser.findOne({
                where: { id, state: true }
            });

            if (!user) {
                return ApiResponseDataHelper.sendNotFound();
            }

            await this.repositoryConUser.update(id, {
                full_name: `${dto.first_name} ${dto.last_name}`,
                first_name: dto.first_name,
                last_name: dto.last_name,
                is_admin: dto.is_admin,
                email: dto.email
            })

            return ApiResponseDataHelper.sendSuccess(user, 'Usuario actualizado exitosamente');
        } catch (error) {
            return ApiResponseDataHelper.sendError(error.message);
        }
    }

    public async softDelete(id: number, user: UserLoginDto): Promise<ResponseTypedApis> {
        try {
            const user = await this.repositoryConUser.findOne({
                where: { id, state: true }
            });

            if (!user) {
                return ApiResponseDataHelper.sendNotFound();
            }

            await this.repositoryConUser.update(id, {
                state: false
            })

            return ApiResponseDataHelper.sendSuccess(user, 'Usuario eliminado exitosamente');
        } catch (error) {
            return ApiResponseDataHelper.sendError(error.message);
        }
    }

    private encryptPassword(text: string): string {
        const algorithm = 'aes-256-ecb';
        const encryptionKey = process.env.ENCRYPTION_KEY;
        const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryptionKey), null);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
}
