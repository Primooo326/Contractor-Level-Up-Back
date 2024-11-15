import { IsNotEmpty, IsString } from "class-validator";

export class CreateProyectDto {

    @IsNotEmpty()
    @IsString()
    name_proyect: string;
}
