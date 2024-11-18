import { HttpStatus, Injectable } from '@nestjs/common';
import { PageMetaDto } from 'src/common/dtos-globals/page-meta.dto';
import { ResponseCodes } from '../constanst/response-code';
import { ResponseTypedError, ResponseTypedSuccess, ResponseTypedSuccessPaginated } from '../interfaces/api-response-typed.interface';

@Injectable()
export class ApiResponseDataHelper {
  // Respuesta de éxito paginada
  static sendSuccessPaginated(data: any[], meta: PageMetaDto, message: string = 'Solicitud exitosa', statusCode: HttpStatus = ResponseCodes.SUCCESS.OK): ResponseTypedSuccessPaginated {
    return {
      statusCode,
      message,
      data,
      meta
    };
  }

  // Respuesta de éxito
  static sendSuccess(data: any, message: string = 'Solicitud exitosa', statusCode: HttpStatus = ResponseCodes.SUCCESS.OK): ResponseTypedSuccess {
    return {
      statusCode,
      message,
      data,
    };
  }

  // Respuesta de error "Not Found"
  static sendNotFound(message: string = 'Recurso no encontrado'): ResponseTypedError {
    return {
      statusCode: ResponseCodes.CLIENT_ERROR.NOT_FOUND,
      message,
    };
  }

  // Respuesta de error "Duplicado"
  static sendConflict(message: string = 'El recurso ya existe'): ResponseTypedError {
    return {
      statusCode: ResponseCodes.CLIENT_ERROR.CONFLICT,
      message,
    };
  }

  // Respuesta de recurso creado
  static sendCreated(data: any, message: string = 'Recurso creado exitosamente'): ResponseTypedSuccess {
    return {
      statusCode: ResponseCodes.SUCCESS.CREATED,
      message,
      data,
    };
  }

  // Respuesta de error "Bad Request"
  static sendBadRequest(message: string = 'Solicitud inválida'): ResponseTypedError {
    return {
      statusCode: ResponseCodes.CLIENT_ERROR.BAD_REQUEST,
      message,
    };
  }

  // Respuesta de error genérico
  static sendError(message: string, statusCode: HttpStatus = ResponseCodes.SERVER_ERROR.INTERNAL_SERVER_ERROR): ResponseTypedError {
    return {
      statusCode,
      message,
    };
  }
}
 