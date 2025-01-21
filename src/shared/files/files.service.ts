import { Injectable } from '@nestjs/common';
import { ApiResponseDataHelper } from 'src/common/helpers/api-response-data.helper';
import { ResponseTypedApis } from 'src/common/interfaces/api-response-typed.interface';
import axios from 'axios';
import * as FormData from 'form-data';

@Injectable()
export class FilesService {
    public async upload(file: Express.Multer.File): Promise<ResponseTypedApis> {
        const goHighLevelApi = process.env.GOHIGHLEVEL_API;
        const goHighLevelConversationId = process.env.GOHIGHLEVEL_CONVERSATION_ID;
        const goHighLevelLocationId = process.env.GOHIGHLEVEL_LOCATION_ID;
        const goHighLevelToken = process.env.GHLToken;

        const timestamp = Date.now();
        const extension = file.originalname.split('.').pop();
        const newFileName = `imagen_${timestamp}.${extension}`;

        const formData = new FormData();
        formData.append('fileAttachment', file.buffer, newFileName);
        formData.append('conversationId', goHighLevelConversationId);
        formData.append('locationId', goHighLevelLocationId);

        try {
            const response = await axios.post(
                `${goHighLevelApi}/conversations/messages/upload`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${goHighLevelToken}`,
                        'Version': '2021-04-15',
                        ...formData.getHeaders(),
                    },
                    timeout: 10000,
                }
            );

            const uploadedFiles = response.data.uploadedFiles;
            const fileUrl = Object.values(uploadedFiles)[0];

            console.log('File URL =>', fileUrl);

            return ApiResponseDataHelper.sendSuccess(fileUrl, 'Archivo cargado exitosamente');
        } catch (error) {
            console.error('Error al subir el archivo:', error);
            return ApiResponseDataHelper.sendError('Error al cargar el archivo.');
        }
    }
}
