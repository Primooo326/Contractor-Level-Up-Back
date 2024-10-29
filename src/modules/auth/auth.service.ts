import { Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma-config/prisma.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService ,
    private readonly jwtService: JwtService,
  ) { }

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;
    const findUser = await this.prisma.user.findUnique({
      where: { email: email},
      select: {
        id: true,
        full_name: true,
        email: true,
        password: true,
        passwordUpdateDate: true,
        is_admin: true,
      },
    });

    if (!findUser) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const encrypted = await this.encryptPassword(password);
    if (encrypted !== findUser.password) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = { userId: findUser.id, userName: findUser.full_name, userEmail: findUser.email, isAdmin: findUser.is_admin};
    const token = this.jwtService.sign(payload, { expiresIn: '1d' });

    const resetPass = this.validateUpdatePass(findUser.passwordUpdateDate ?? null);
    const userFormatted = this.formatUserResponse(findUser);

    return { resetPass, token, user: userFormatted };
  }

  private validateUpdatePass(passwordUpdateDate: Date | null): boolean {

    if (!passwordUpdateDate) {
      return true;
    }
    const currentDate = new Date();
    const differenceInMs = currentDate.getTime() - passwordUpdateDate.getTime();
    const daysPassed = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    return daysPassed > 30;
  }

  private formatUserResponse(findUser) {
    return {
      id: findUser.id,
      email: findUser.email,
      full_name: findUser.full_name,
     
    };

  }
  async encryptPassword(text: string): Promise<string> {
    const algorithm = 'aes-256-ecb';
    const encryptionKey = process.env.ENCRYPTION_KEY;
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryptionKey), null);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
}

