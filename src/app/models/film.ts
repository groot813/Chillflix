export class Film {
    constructor(
        public poster: string,
        public title: string,
        public type: string,
        public year: string,
        public imdbId: string,
    ) { }

}
export class FilmDetail{
    constructor(
    public title: string,
    public year: string,
    public rated: string,
    public released: string,
    public runtime: string,
    public genre: string,
    public director: string,
    public writer: string,
    public actors: string,
    public plot: string,
    public language: string,
    public country: string,
    public awards: string,
    public poster: string,
    public metascore: string,
    public imdbRating: string,
    public imdbVotes:string,
    public mdbID: string,
    public type: string,
    public dvd: string,
    public boxOffice: string,
    public production: string,
    public website: string,
    public Response: string
    ){}
}

interface IOMDBSearchResponse {
    Search: {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
    }[];
    totalResults: string;
    Response: string;
}

interface IOMDBSearchDetailResponse {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes:string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
