import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMessageLogDto {
    @IsString()
    @IsOptional()
    toNumber: string;

    @IsString()
    @IsNotEmpty()
    messageContent: string;
}
