import { IsArray, IsDateString, IsOptional, IsString } from "class-validator";

export class MessageDto {
    @IsOptional()
    @IsArray()
    @IsString({ each: true }) // Si se espera un arreglo de strings
    userIds?: string[];

    @IsOptional()
    @IsDateString()
    fechaInicial?: string;

    @IsOptional()
    @IsDateString()
    fechaFinal?: string;
}