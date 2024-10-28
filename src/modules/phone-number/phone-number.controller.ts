import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { PhoneNumberService } from './phone-number.service';
import { CreatePhoneNumberDto } from './dto/create-phone-number.dto';
import { UpdatePhoneNumberDto } from './dto/update-phone-number.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';


@Controller('phone-number')
export class PhoneNumberController {
  constructor(private readonly phoneNumberService: PhoneNumberService) {}
  //@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPhoneNumberDto: CreatePhoneNumberDto) {
    return this.phoneNumberService.create(createPhoneNumberDto);
  }
  //@UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.phoneNumberService.findAll(paginationDto);
  }
  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phoneNumberService.findOne(+id);
  }
  //@UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePhoneNumberDto: UpdatePhoneNumberDto) {
    return this.phoneNumberService.update(+id, updatePhoneNumberDto);
  }
  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phoneNumberService.remove(+id);
  }
}
