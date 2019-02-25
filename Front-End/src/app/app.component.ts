import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmsService } from './service/films.service';
//Hier wordt de gecreeerde films service geimporteerd in de controller.
import { Film } from './models/film';
import { Subscription } from 'rxjs';
import { delay, tap, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public films: Film[] = [];
  public date = new Date();
  public price = 88
  public condition =false;
  public title:string="Marc";
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
    const searchSubscrition = this.filmsService.searchFilms(userInput)
      .pipe(
        // delay(6),
        tap(
          filmsResponse => this.films = filmsResponse,
          error => console.error('fout in Appcomponent bij ophalen films')
        )
      )
      .subscribe()

    this.subscriptions.add(searchSubscrition);
  }

  public ngOnDestroy(): void {
    throw new Error("Method not implemented.");
    console.log('Init');
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.filmsService.allFilms().subscribe(
      filmsResponse => this.films = filmsResponse,
      error => console.error('fout in Appcomponent bij ophalen films')));
      }

  showContent() {
    this.toggle();
    console.log("Marc");
  }
  private toggle() {
    this.condition = !this.condition;
  }

}
