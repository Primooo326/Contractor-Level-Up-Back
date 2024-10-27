import { IsNotEmpty, IsString } from "class-validator";

export class CreateTemplateDto {

    @IsNotEmpty()
    @IsString()
    description: string;
}
