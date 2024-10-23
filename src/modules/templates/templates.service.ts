import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TemplatesService extends PrismaClient implements OnModuleInit {
    private readonly logger = new Logger('ProductsService')  
    onModuleInit() {
    this.$connect();
    this.logger.log('database connected');
  }
  create(createTemplateDto: CreateTemplateDto) {
    return 'This action adds a new template';

    //para usar el create con prisma se usa asi 
    // return this.template.create({
    //   data: createTemplateDto,
    // });
  }

  findAll() {
    return `This action returns all templates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} template`;
  }

  update(id: number, updateTemplateDto: UpdateTemplateDto) {
    return `This action updates a #${id} template`;
  }

  remove(id: number) {
    return `This action removes a #${id} template`;
  }
}
