import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/user-dto/user-dto.model';

@Controller('user')
export class UserController {
  @Post('TestSaveuser')
  public saveUser(@Body() user: CreateUserDto): void {
    console.log(user.userEntity());
    // return user.userEntity();
  }
}
