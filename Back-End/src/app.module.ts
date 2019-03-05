import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CreateMovieDto } from './models/create-movie-dto';
import { MovieController } from './controllers/movie/movie.controller';
import { MovieService } from './service/movie/movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './models/movie/movie-entity';
import { UserController } from './controllers/user/user.controller';
import { UserEntity } from './features/users/entities/user-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chillflix',
      entities: [__dirname + '/**/*-entity{.ts,.js}'],
      synchronize: true,
    }),
  TypeOrmModule.forFeature([MovieEntity, UserEntity])
  ],
  controllers: [AppController, MovieController, UserController],
  providers: [AppService, MovieService],
})
export class AppModule {}
