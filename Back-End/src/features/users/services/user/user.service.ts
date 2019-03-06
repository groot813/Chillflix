import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user-entity';
import { Repository, ObjectID } from 'typeorm';
import { CreateUserDto } from '../../dtos/user-dto/create-user-dto';
import { MovieEntity } from 'src/models/movie/movie-entity';
import { promise } from 'selenium-webdriver';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // saveUser(user: CreateUserDto): void{
 //  this.userRespository.save(user); }

    //

  saveUser(userEntity: UserEntity): void {
    this.userRepository.save(userEntity);
  }

  getUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  getUserById(UserId: number): Promise<UserEntity> {
     return this.userRepository.findOne({where: {id: UserId}});
      }
}
