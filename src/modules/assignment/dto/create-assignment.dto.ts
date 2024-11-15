import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAssignmentDto {

    @IsNotEmpty()
    @IsString()
    id_user: string;

    @IsNotEmpty()
    @IsString()
    iduser_high_level: string;

    @IsNotEmpty()
    @IsString()
    contact_id: string;

    @IsNotEmpty()
    @IsString()
    full_name_contact: string;

    @IsOptional()
    @IsString()
    first_name_contact: string;

    @IsOptional()
    @IsNotEmpty()
    last_name_contact: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone_contact: string;

    @IsOptional()
    @IsString()
    status: boolean;

    @IsOptional()
    @IsString()
    assignment_date: Date;
}
