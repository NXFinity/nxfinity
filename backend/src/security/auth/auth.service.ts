import { Injectable } from '@nestjs/common';
import { UsersService } from '../../api/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  userData: any;

  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto): Promise<any> {
    const checkUser = await this.userService.findOne(loginDto.username);
    if (!checkUser) {
      return {
        message: 'User not found',
      };
    }
    const payload = { username: loginDto.username };
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: refreshToken,
    };
  }

  async register(registerDto: RegisterDto): Promise<any> {
    const checkUser = await this.userService.findOne(registerDto.username);
    if (checkUser) {
      return {
        message: 'Username already exists',
      };
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerDto.password, salt);
    const createdUser = await this.userService.createUser({
      username: registerDto.username,
      password: hashedPassword,
      email: registerDto.email,
      firstName: registerDto.firstName,
      lastName: registerDto.lastName,
    });
    const { password, ...result } = createdUser;
    return result;
  }

  async logout() {}

  isLive() {
    return false;
  }
}
