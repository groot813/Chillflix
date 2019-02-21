import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/service/films.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent {


  public films: Film[] = [];
  public date = new Date();
  public price = 88
  public condition =false;
  public title:string="Marc";
  public userInput: string ="";
  public tafels = [
    { tafelNummer: '1', aantalPersonen: '5' },
    { tafelNummer: '2', aantalPersonen: '5' },
    { tafelNummer: '3', aantalPersonen: '6' },
    { tafelNummer: '4', aantalPersonen: '10' }
  ]

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
      .subscribe()

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
