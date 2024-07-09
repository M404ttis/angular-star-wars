import { Component } from '@angular/core';
import { StarWarsFilmI } from '../star-wars-filmI';
// import { StarWarsFilmI } from './../star-wars-filmI';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})
export class FilmCardComponent {

  film: StarWarsFilmI = {



  }


}
