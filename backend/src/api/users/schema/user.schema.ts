import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty()
  @Prop()
  id: string;
  @ApiProperty()
  @Prop({ required: true })
  username: string;
  @ApiProperty()
  @Prop({ required: true })
  firstName: string;
  @ApiProperty()
  @Prop({ required: true })
  lastName: string;
  @ApiProperty()
  @Prop({ required: true })
  password: string;
  @ApiProperty()
  @Prop({ required: true })
  email: string;

  @ApiProperty()
  @Prop({ default: false })
  isVerified: boolean;

  @ApiProperty()
  @Prop()
  streamKey: string;

  @ApiProperty()
  @Prop()
  refreshToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
