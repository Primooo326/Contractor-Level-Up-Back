import { Body, Controller, Get, Post, Query, UseGuards, Request } from '@nestjs/common';
import { MessagesLogService } from './messages-log.service';
import { MessageDto } from '../user/dto/message-user.dto';
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';
import { CreateMessageLogDto } from './dto/create-message-log.dto';
import { ValidateCountDto } from './dto/validate-count.dto';

@UseGuards(JwtAuthGuard)
@Controller('messages-log')
export class MessagesLogController {
  constructor(private readonly messagesLogService: MessagesLogService) {}
  
  @Get('count')
  async countMessages(@Query() filters: MessageDto) {
    return await this.messagesLogService.Messages(filters);
  }

  @Post('createLog')
  create(@Body() dto: CreateMessageLogDto, @Request() req) {
    return this.messagesLogService.create(dto, req.user);
  }

  @Post('validateCount')
  async validateCount(@Body() dto: ValidateCountDto, @Request() req) {
    return await this.messagesLogService.validateCount(dto, req.user);
  }
}
