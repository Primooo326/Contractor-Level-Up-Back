import { PageMetaDto } from "./page-meta.dto";

export class PaginatedResponseDto {
    statusCode: number;
    message: string;
    data: any[];
    meta: PageMetaDto;
}

export class SuccessResponseDto {
    statusCode: number;
    message: string;
    data: any[];
}

export class NotFoundResponseDto {
    statusCode: number;
    message: string;
}

export class ConflictResponseDto {
    statusCode: number;
    message: string;
}

export class CreatedResponseDto {
    statusCode: number;
    message: string;
    data: any;
}

export class ErrorResponseDto {
    statusCode: number;
    message: string;
}