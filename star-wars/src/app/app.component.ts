import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './FormComponent/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'star-wars';
}
