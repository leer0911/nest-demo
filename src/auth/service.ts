import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '@/user/service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService, private readonly jwtService: JwtService) {}

  async login(user) {
    const find = await this.usersService.findOneByName(user.username);
    const passed = await bcrypt.compare(user.password, find.password);

    if (passed) {
      const payload = { username: user.username, sub: find._id };

      return {
        accessToken: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('账号或密码错误');
    }
  }
}
