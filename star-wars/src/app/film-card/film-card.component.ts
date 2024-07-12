import { Component, Input, OnInit } from '@angular/core';
import { HighlightFilmsService } from '../highlight-films.service';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
//import { FilmGridComponent } from '../film-grid/film-grid.component';
//import { StarWarsFilmI} from './../star-wars-filmI';

@Component({
  selector: 'film-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})

export class FilmCardComponent {
  constructor(private highlightFilmService: HighlightFilmsService) { }

  @Input() swapiFilms: any; // Input decorator to receive data from parent
  @Input() film: any; // Input decorator to receive data from parent
  @Input() item: any;

  /*
  * the directive used here
  * */
  @Input() appHighlight: boolean = false; // supposed to listen to the form

  ngOnInit(){
    // subscribes to highlightFilms event
    // FIXME: this seems to break ...
    this.highlightFilmService.highlightedFilms$.subscribe((highlightedFilms: number[]) => {
      // .includes gives back a boolean
      this.appHighlight = highlightedFilms.includes(this.film.episode_id);
    });
  }
}
