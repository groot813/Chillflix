import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { FilmsService } from 'src/app/service/films.service';
import { FilmDetail } from 'src/app/models/film-detail.model';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  public film: FilmDetail | undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute, private filmsService: FilmsService) {
  }
  
  public filmDetail(imdbId: string): void {
    this.filmsService.searchFilmDetail(imdbId)
      .pipe(
        // delay(6),
        take(1),
        tap(
          filmsResponse => this.film = filmsResponse,
          error => console.error('fout in Appcomponent bij ophalen films')
        )
      )
      .subscribe()
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params)
    this.filmDetail(this.activatedRoute.snapshot.params.imdbId);
  }

}
