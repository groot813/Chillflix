import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Film } from "src/app/models/film";

@Component({
  selector: "app-film-list-item",
  templateUrl: "./film-list-item.component.html",
  styleUrls: ["./film-list-item.component.scss"]
})
export class FilmListItemComponent implements OnInit {

  constructor() {}
  @Input() public film?: Film = undefined;
  @Output() orderFilm: EventEmitter<Film> = new EventEmitter<Film>();

  ngOnInit() {
    console.log(this.film);
  }
 filmSelected(movie: Film) {
     this.orderFilm.emit(movie);
  }
}
