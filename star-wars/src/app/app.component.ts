import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './FormComponent/form.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmGridComponent } from './film-grid/film-grid.component';
import { CommonModule } from '@angular/common';
import {StarWarsService} from './swapi-fetch.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, FilmCardComponent, FilmGridComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  /*
  constructor(

    public swapiVehicles: StarWarsService,
    public swapiPeople: StarWarsService,
    public swapiStarships: StarWarsService,
    public swapiFilms: StarWarsService,

  ){}
  ngOnInit():void {
    this.swapiVehicles.fetchData('https://swapi.dev/api/vehicles');
    this.swapiPeople.fetchData('https://swapi.dev/api/people');
    this.swapiStarships.fetchData('https://swapi.dev/api/starships');
    this.swapiFilms.fetchData('https://swapi.dev/api/films');
  }
  */
  title = 'star-wars';
}
