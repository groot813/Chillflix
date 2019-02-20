import { Component, OnInit } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { Film } from 'src/app/models/film';
import { Subscription } from 'rxjs';
import { FilmsService } from 'src/app/films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

   
  private subscriptions: Subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute)
   {
  }
  
  // public filmDetail(imdbID: string): void {
  //   this.filmsService.searchFilmDetail(imdbID)
  //     .pipe(
  //       // delay(6),
  //       take(1),
  //       tap(
  //         filmsResponse => this.films = filmsResponse,
  //         error => console.error('fout in Appcomponent bij ophalen films')
  //       )
  //     )
  //     .subscribe()
  // }

   ngOnInit() {   
     console.log(this.activatedRoute.snapshot.params)
    }

    //  this.subscriptions.add(this.filmsService.allFilms().subscribe(
    //   (      filmsResponse: any[]) => this.films = filmsResponse,
      // error => console.error('fout in Appcomponent bij ophalen films')));
    
 


  // }
  }


