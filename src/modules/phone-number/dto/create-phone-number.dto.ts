import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePhoneNumberDto {

    @IsString()
    @IsNotEmpty()
    sidHigh_Level:string

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    friendlyName: string;

    @IsString()
    @IsNotEmpty()
    countryCode: string;

    @IsBoolean()
    @IsNotEmpty()
    fax: boolean

    @IsBoolean()
    @IsNotEmpty()
    voice: boolean

    @IsBoolean()
    @IsNotEmpty()
    sms: boolean

    @IsBoolean()
    @IsNotEmpty()
    mms: boolean

    @IsBoolean()
    @IsNotEmpty()
    type: string

    @IsBoolean()
    @IsNotEmpty()
    isGroupConversationEnabled: boolean
}
