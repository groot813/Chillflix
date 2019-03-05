import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/features/users/dtos/user-dto/create-user-dto';
//import { CreateUserDto } from 'src/features/users/dtos/user-dto/create-user-dto';


@Controller('user')
export class UserController {
  @Post('TestSaveuser')
  public saveUser(@Body() createUserDto: CreateUserDto): void {
    console.log(createUserDto.userEntity());
    createUserDto.userEntity();
  }
}
