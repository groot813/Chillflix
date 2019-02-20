import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Film } from './models/film';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

@Injectable({
    providedIn: 'root'
})
export class FilmsService {

    constructor(private http: HttpClient) {
    }

    public allFilms (): Observable<Film[]> {
        return this.http.get<IOMDBSearchResponse>("http://www.omdbapi.com/?apikey=e36ea2a2&s=seven")
            .pipe(
                map(FilmsService.IOMDBSearchResponseToFilmsMapper)
            )
    }
    public searchFilms (searchString: String): Observable<Film[]> {
      return this.http.get<IOMDBSearchResponse>("http://www.omdbapi.com/?apikey=e36ea2a2&s="+searchString)
          .pipe(
              map(FilmsService.IOMDBSearchResponseToFilmsMapper)
          )
    }

    public searchFilmDetail(imdbID: String): Observable<Film[]> {
        return this.http.get<IOMDBSearchResponse>("http://www.omdbapi.com/?apikey=e36ea2a2&i="+imdbID)
        .pipe(
            map(FilmsService.IOMDBSearchResponseToFilmsMapper)
        )
    }
    
//Films binnnen van IMDB
    private static IOMDBSearchResponseToFilmsMapper(omdbSearchResponse: IOMDBSearchResponse): Film[] {
        return omdbSearchResponse.Search.map(FilmsService.OMDBMovieToFilm)
    }

    private static OMDBMovieToFilm(omdbFilm: OMDBFilm): Film {
        return new Film(omdbFilm.Poster, omdbFilm.Title, omdbFilm.Type, omdbFilm.Year, omdbFilm.imdbID)
    }
//Filmsdetails vanuit IMDB
}
//Interface specificatie richting IOMDB service op internet
interface IOMDBSearchResponse {
    Search: OMDBFilm[];
    totalResults: string;
    Response: string;
}
//Interface specificatie richting IOMDB service
interface OMDBFilm {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    }

//Interface voor film detail in een specificate richting de IOMDB service
interface searchFilmDetail {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Plot: string;
    }
