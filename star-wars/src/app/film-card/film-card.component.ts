import { Component, Input } from '@angular/core';
//import { FilmGridComponent } from '../film-grid/film-grid.component';
import { StarWarsFilmI} from './../star-wars-filmI';

@Component({
  selector: 'film-card',
  standalone: true,
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})
export class FilmCardComponent {
  @Input() films!: StarWarsFilmI[];
}
