import { IsNotEmpty, IsNumber} from "class-validator";

export class ValidateCountDto {
    @IsNumber()
    @IsNotEmpty()
    amountSend: number;
}
