import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './FormComponent/form.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmGridComponent } from './film-grid/film-grid.component';
import {SwapiFetchService} from './swapi-fetch.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, FilmCardComponent, FilmGridComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(

    private swapiVehicles: SwapiFetchService,
    private swapiPeople: SwapiFetchService,
    private swapiStarships: SwapiFetchService,
    private swapiFilms: SwapiFetchService,

  ){}
  ngOnInit():void {
    this.swapiVehicles.fetchData('');
    this.swapiPeople.fetchData('');
    this.swapiStarships.fetchData('');
    this.swapiFilms.fetchData('');
  }
  title = 'star-wars';
}
