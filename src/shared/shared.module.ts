import { Module } from '@nestjs/common';
import { FilesService } from './files/files.service';
import { FilesController } from './files/files.controller';

@Module({
  providers: [FilesService],
  controllers: [FilesController]
})
export class SharedModule {}
