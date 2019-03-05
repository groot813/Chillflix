import { Module } from '@nestjs/common';
import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserEntity } from '../../entities/user-entity';
import * as bcrypt from 'bcrypt';

@Module({})
export class CreateUserDto {

    @IsString()
    @ApiModelProperty()
    public readonly userName: string;

    @IsNumber()
    @ApiModelProperty()
    public readonly age: number;

    @IsString()
    @ApiModelProperty()
    public readonly password: string;

    userEntity(): UserEntity{
        return new UserEntity(this.userName, this.age, bcrypt.hashSync(this.password, 10));
    }
}
