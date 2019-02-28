import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateMovieDto } from 'src/models/create-movie-dto';
import { Movie } from 'src/models/movie';
import { MovieService } from 'src/service/movie/movie.service';
import { appendFile } from 'fs';
import { MovieEntity } from 'src/models/movie/movie.entity';

@Controller('movie')
export class MovieController {
/// Door Appel aan de movieservice toe te kennen wordt de dependcy injection 

  constructor(private appel: MovieService) {}

  @Post('postMovie')
  public saveMovie(@Body() movie: CreateMovieDto): void {
    this.appel.saveMovie(movie);
  }

  @Get('/movies')
  movies(): Promise<Movie[]> {
    return this.appel.getMovies();
  }
}
