import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Account Management')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
