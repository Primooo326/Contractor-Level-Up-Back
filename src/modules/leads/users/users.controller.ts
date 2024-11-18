import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { ResponseCodes } from 'src/common/constanst/response-code';
import { ApiPaginatedResponse } from 'src/common/constanst/config-globals';
import { PageOptionsDto } from 'src/common/dtos-globals/page-options.dto';
import { ResponseTypedApis } from 'src/common/interfaces/api-response-typed.interface';
import { CreOrUpdUserDto } from './dto/cre-upd-user.dto';
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConUser } from 'src/db/con-entities/con-user.entity';

@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiTags('users')
@ApiBearerAuth()
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) { }

  @HttpCode(ResponseCodes.SUCCESS.OK)
  @Get()
  @ApiPaginatedResponse(ConUser)
  async findAll(@Query() pageOptionsDto: PageOptionsDto, @Request() req): Promise<ResponseTypedApis> {
    return await this.usersService.findAll(pageOptionsDto, req.user);
  }

  @HttpCode(ResponseCodes.SUCCESS.OK)
  @Get(':id')
  async findOne(@Param('id') id: number, @Request() req): Promise<ResponseTypedApis> {
    return await this.usersService.findOne(id, req.user);
  }

  @HttpCode(ResponseCodes.SUCCESS.CREATED)
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() dto: CreOrUpdUserDto, @Request() req): Promise<ResponseTypedApis> {
    return await this.usersService.create(dto, req.user);
  }

  @HttpCode(ResponseCodes.SUCCESS.CREATED)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: CreOrUpdUserDto, @Request() req): Promise<ResponseTypedApis> {
    return await this.usersService.update(id, dto, req.user);
  }

  @HttpCode(200)
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req): Promise<ResponseTypedApis> {
    return await this.usersService.softDelete(id, req.user);
  }
}
