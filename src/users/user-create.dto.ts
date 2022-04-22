import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// data transfer object
export default class UserCreateDTO{
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  idade: number;
}