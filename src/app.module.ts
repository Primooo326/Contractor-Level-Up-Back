import { Module } from '@nestjs/common';
import { TemplatesModule } from './modules/templates/templates.module';

@Module({
  imports: [TemplatesModule],
})
export class AppModule { }