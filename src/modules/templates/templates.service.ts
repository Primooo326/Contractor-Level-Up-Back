import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PrismaService } from '../prisma-config/prisma.service';



@Injectable()
export class TemplatesService  {
   
  constructor(private readonly prisma: PrismaService) { }
  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const totalPages = await this.prisma.template.count({ where: { status: true }});
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.prisma.template.findMany({
        where: { status: true },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      meta: {
        total: totalPages,
        page: page,
        lastPage: lastPage,
      }
    }

  }
  create(createTemplateDto: CreateTemplateDto) {
    
     return this.prisma.template.create({data: createTemplateDto});
  }

   async findOne(id: number) {
     const template = await this.prisma.template.findFirst({
       where: { id },
     });

     if (!template) {
       throw new NotFoundException(`Template with ID ${id} not found`);
     }

     return template;
  }
  async update(id: number, updateTemplateDto: UpdateTemplateDto) {
    await this.findOne(id);
    return this.prisma.template.update({where: { id },data: updateTemplateDto,});
  }

  async remove(id: number) {
    const template = await this.findOne(id); 
    if (!template) {
      throw new NotFoundException(`Template with ID ${id} not found`);
    }

    return await this.prisma.template.update({
      where: { id },
      data: { status: false }
    });
  }
}
