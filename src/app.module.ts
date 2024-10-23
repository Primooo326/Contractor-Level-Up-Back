import { Module } from '@nestjs/common';
import { TemplatesModule } from './modules/templates/templates.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TemplatesModule, UserModule],
})
export class AppModule { }