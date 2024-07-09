import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './FormComponent/form.component';
import { FilmCardComponent } from './film-card/film-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, FilmCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'star-wars';
}
