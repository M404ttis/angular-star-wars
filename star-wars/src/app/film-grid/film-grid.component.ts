import { Component } from '@angular/core';
import {FilmCardComponent } from './../film-card/film-card.component'

@Component({
  selector: 'app-film-grid',
  standalone: true,
  imports: [FilmCardComponent],
  templateUrl: './film-grid.component.html',
  styleUrl: './film-grid.component.css'
})
export class FilmGridComponent {

}
