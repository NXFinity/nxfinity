import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'username' })
  username: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'firstName' })
  firstName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'lastName' })
  lastName: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'email' })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'password' })
  password: string;
}
