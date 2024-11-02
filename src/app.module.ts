import { Module } from '@nestjs/common';
import { TemplatesModule } from './modules/templates/templates.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './modules/prisma-config/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { MessagesLogModule } from './modules/messages-log/messages-log.module';


@Module({
  imports: [TemplatesModule, UserModule, PrismaModule, AuthModule, MessagesLogModule],
})
export class AppModule { }