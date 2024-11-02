import { Module } from '@nestjs/common';
import { MessagesLogService } from './messages-log.service';
import { MessagesLogController } from './messages-log.controller';

@Module({
  controllers: [MessagesLogController],
  providers: [MessagesLogService],
})
export class MessagesLogModule {}
