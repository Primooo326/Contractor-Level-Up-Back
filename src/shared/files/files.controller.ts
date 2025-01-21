import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResponseTypedApis } from 'src/common/interfaces/api-response-typed.interface';
import { FilesService } from './files.service';
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) { }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<ResponseTypedApis> {
        return await this.filesService.upload(file);
    }
}
