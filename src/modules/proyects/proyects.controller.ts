import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query, NotFoundException } from '@nestjs/common';
import { ProyectsService } from './proyects.service';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('proyects')
export class ProyectsController {
  constructor(private readonly proyectsService: ProyectsService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() createProyectDto: CreateProyectDto) {
    return this.proyectsService.create(createProyectDto);
  }

  @Get()
  @HttpCode(200)
  findAll(@Query() paginationDto: PaginationDto) {
    return this.proyectsService.findAll(paginationDto);
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string) {
    const project = await this.proyectsService.findOne(Number(id));
    if (!project) {
      throw new NotFoundException('Proyecto no encontrado');
    }
    return project;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectDto: UpdateProyectDto) {
    return this.proyectsService.update(+id, updateProyectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectsService.remove(+id);
  }
}
