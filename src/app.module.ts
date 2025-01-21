import { Module } from '@nestjs/common';
import { TemplatesModule } from './modules/templates/templates.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './modules/prisma-config/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { MessagesLogModule } from './modules/messages-log/messages-log.module';
import { PhoneModule } from './modules/phone/phone.module';
import { AssignmentModule } from './modules/assignment/assignment.module';
import { ProyectsModule } from './modules/proyects/proyects.module';
import { UsersModule } from './modules/leads/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConMysqlConfig } from './db/con-mssql.config';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { LeadsModule } from './modules/leads/leads.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(
      ConMysqlConfig(
        process.env.DB_HOST,
        process.env.DB_PORT,
        process.env.DB_DATABASE,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
      ),
    ),
    TemplatesModule,
    UserModule,
    PrismaModule,
    AuthModule,
    MessagesLogModule,
    PhoneModule,
    AssignmentModule,
    ProyectsModule,
    LeadsModule,
    SharedModule
  ],
})
export class AppModule { }