import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.phoneService.findAll(paginationDto);
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.phoneService.findOne(id);
  }
}
