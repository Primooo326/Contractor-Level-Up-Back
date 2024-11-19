import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, Request, UseGuards } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('assignment')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Post()
  @HttpCode(200)
  create(@Body() createAssignmentDto: CreateAssignmentDto, @Request() req) {
    return this.assignmentService.create(createAssignmentDto, req.user);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.assignmentService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssignmentDto: UpdateAssignmentDto) {
    return this.assignmentService.update(+id, updateAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignmentService.remove(+id);
  }
}
