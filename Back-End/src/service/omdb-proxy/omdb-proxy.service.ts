import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class OmdbProxyService {
    private static apiKey = 'e36ea2a2';
    private static api = `http://www.omdbapi.com?apikey=${OmdbProxyService.apiKey}`;
    constructor(private readonly http: HttpService) {}

    searchMovies(searchQuery: string): Observable<any> {
        //logic to call omdb search service
        return this.http.get(`${OmdbProxyService.api}&s=${searchQuery}`)
        .pipe(
            map(axiosResponse => axiosResponse.data)
        );

    }

    movieDetails(imdbId: string)  {

    }
}
