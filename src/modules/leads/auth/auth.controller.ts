import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ResponseCodes } from 'src/common/constanst/response-code';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(ResponseCodes.SUCCESS.OK)
  @Post('login')
  loginUser(@Body() dto: LoginAuthDto) {
    return this.authService.login(dto);
  }
}