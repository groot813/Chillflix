import { Injectable } from '@nestjs/common';
import { Movie } from 'src/models/movie';
import { CreateMovieDto } from 'src/models/create-movie-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from 'src/models/movie/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {

  constructor(
    @InjectRepository(MovieEntity)
  
    private readonly movieRepository: Repository<MovieEntity>) {}

  getMovies(): Promise<Movie[]> {
    return this.movieRepository.find();
// tslint:disable-next-line: max-line-length
    // const myMappedMovies = moviesEntities.map(movieEntity => new Movie(movieEntity.title, movieEntity.poster, movieEntity.title,movieEntity.,movieEntity.author));
    //   return this.movieRepository.find();
  }

  saveMovie(movie: Movie): void {
      this.movieRepository.save(movie);
  }
}
