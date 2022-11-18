import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body) {
    return this.authService.login(body);
  }
}
