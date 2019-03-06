import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { CreateUserDto } from 'src/features/users/dtos/user-dto/create-user-dto';
import { UserService } from 'src/features/users/services/user/user.service';
import { promise } from 'selenium-webdriver';
import { UserEntity } from 'src/features/users/entities/user-entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('TestSaveuser')
  public saveUser(@Body() createUserDto: CreateUserDto): void {
    this.userService.saveUser(createUserDto.userEntity());
  }

  @Get('GetUser')
  public getUser(): Promise<UserEntity[]> {
    return this.userService.getUser();
  }

  @Get('/users/:id')
  public getUserById(@Param('id') userId: number): Promise<UserEntity> {
    console.log('Marc');
    return this.userService.getUserById(userId);
  }
}
