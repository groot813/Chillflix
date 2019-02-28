
export class Movie {
    constructor(
    public readonly imdbId: string,
    public readonly poster: string,
    public readonly title: string,
    public readonly year: number,
    public readonly author: string,
    ) {}
}
