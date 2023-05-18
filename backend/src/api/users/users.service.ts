import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(username: string) {
    return this.userModel.findOne({ username }).exec();
  }

  async createUser(credentials: {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
  }) {
    const createdUser = new this.userModel({
      username: credentials.username,
      password: credentials.password,
      email: credentials.email,
      firstName: credentials.firstName,
      lastName: credentials.lastName,
    });

    return await createdUser.save();
  }
}
