import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/service/films.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent {


  public films: Film[] = [];
  public condition = false;
  private subscriptions: Subscription = new Subscription();

  constructor(private filmsService: FilmsService) {
  }

  public handleSearchInputChange(userInput: string): void {
    const searchSubscription = this.filmsService.searchFilms(userInput)
      .pipe(
        // delay(6),
        tap(
          filmsResponse => this.films = filmsResponse,
          error => console.error('fout in Appcomponent bij ophalen films')
        )
      )
      .subscribe();

    this.subscriptions.add(searchSubscription);
  }

  showContent() {
    this.toggle();
    console.log("Marc");
  }
  private toggle() {
    this.condition = !this.condition;
  }
  onFilmSelected(movie: Film) {
   console.log(movie);
 }

}
