import { Module } from '@nestjs/common';
import { TemplatesModule } from './modules/templates/templates.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './modules/prisma-config/prisma.module';


@Module({
  imports: [TemplatesModule, UserModule, PrismaModule],
})
export class AppModule { }