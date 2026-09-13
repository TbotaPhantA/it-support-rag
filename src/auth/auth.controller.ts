import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly service: AuthService,
  ) {}

  @Get('me')
  me() {
    return this.service.me()
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.service.login(dto)
  }
}
