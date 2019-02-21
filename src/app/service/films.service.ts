import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from '../models/film';
import { FilmDetailsComponent } from '../components/film-details/film-details.component';
import { FilmDetail } from '../models/film-detail.model';

@Injectable({
    providedIn: 'root'
})
export class FilmsService {

    constructor(private http: HttpClient) {
    }

    public allFilms(): Observable<Film[]> {
        return this.http.get<IOMDBSearchResponse>("http://www.omdbapi.com/?apikey=e36ea2a2&s=seven")
            .pipe(
                map(FilmsService.IOMDBSearchResponseToFilmsMapper)
            )
    }
    public searchFilms(searchString: String): Observable<Film[]> {
        return this.http.get<IOMDBSearchResponse>("http://www.omdbapi.com/?apikey=e36ea2a2&s=" + searchString)
            .pipe(
                map(FilmsService.IOMDBSearchResponseToFilmsMapper)
            )
    }

    public searchFilmDetail(imdbID: String): Observable<FilmDetail> {
        return this.http.get<OMDBDetailResponse>("http://www.omdbapi.com/?apikey=e36ea2a2&i=" + imdbID)
            .pipe(
                map(data => FilmsService.OmdbFilmToMyFilm(data))
                ///Map is een transformatie http.get is een methode van de Angular http service
            )
    }
//Met static kan ik direct de methode aanroepen zonder een instantie te heoven aanmaken of dependency injection te hoeven gebruiken.

    private static IOMDBSearchResponseToFilmsMapper(omdbSearchResponse: IOMDBSearchResponse): Film[] {
        return omdbSearchResponse.Search.map(FilmsService.OMDBMovieToFilm);
    }

    private static OMDBMovieToFilm(omdbFilm: OMDBFilm): Film {
        return new Film(omdbFilm.Poster, omdbFilm.Title, omdbFilm.Type, omdbFilm.Year, omdbFilm.imdbID);
    }

    //Filmsdetails vanuit IMDB
    private static OmdbFilmToMyFilm(OmdbDetailResponse: OMDBDetailResponse): FilmDetail {
        return new FilmDetail(OmdbDetailResponse.Title,
            OmdbDetailResponse.Year,
            OmdbDetailResponse.Rated,
            OmdbDetailResponse.Released,
            OmdbDetailResponse.Runtime,
            OmdbDetailResponse.Genre,
            OmdbDetailResponse.Director,
            OmdbDetailResponse.Writer,
            OmdbDetailResponse.Actors,
            OmdbDetailResponse.Language,
            OmdbDetailResponse.Country,
            OmdbDetailResponse.Plot,
            OmdbDetailResponse.Language,
            OmdbDetailResponse.Country,
            OmdbDetailResponse.Awards,
            OmdbDetailResponse.imdbRating,
            OmdbDetailResponse.imdbVotes,
            OmdbDetailResponse.imdbID,
            OmdbDetailResponse.Type,
            OmdbDetailResponse.DVD,
            OmdbDetailResponse.BoxOffice,
            OmdbDetailResponse.Production,
            OmdbDetailResponse.Website,
            OmdbDetailResponse.Response
        );
    }
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

interface OMDBDetailResponse {
    'Title': string;
    'Year': string;
    'Rated': string;
    'Released': string;
    'Runtime': string;
    'Genre': string;
    'Director': string;
    'Writer': string;
    'Actors': string;
    'Plot': string;
    'Language': string;
    'Country': string;
    'Awards': string;
    'Poster': string;
    'Metascore': string;
    'imdbRating': string;
    'imdbVotes': string;
    'imdbID': string;
    'Type': string;
    'DVD': string;
    'BoxOffice': string;
    'Production': string;
    'Website': string;
    'Response': string;
}




class Car {
    public static drive() {}
}