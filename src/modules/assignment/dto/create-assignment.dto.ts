import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAssignmentDto {
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
    email_contact: string;

    @IsNotEmpty()
    @IsString()
    phone_contact: string;

    @IsOptional()
    @IsString()
    iduser_high_level?: string;
    
    @IsNotEmpty()
    @IsString()
    email_assignment: string;
}
