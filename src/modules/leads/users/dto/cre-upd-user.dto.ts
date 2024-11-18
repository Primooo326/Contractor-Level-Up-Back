import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreOrUpdUserDto {
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsBoolean()
    is_admin: boolean;

    @IsNotEmpty()
    @IsString()
    email: string;
}