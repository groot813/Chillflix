import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
 {path: 'film-details/:imdbId' ,component: FilmDetailsComponent},
 {path: 'film-search' , component: FilmSearchComponent},
 {path: 'home', component: HomeComponent},
 {path: '*' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
