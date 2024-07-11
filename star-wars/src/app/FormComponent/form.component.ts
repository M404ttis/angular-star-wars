import { CommonModule } from '@angular/common';
import { withFetch } from '@angular/common/http';
import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl ,ReactiveFormsModule, FormsModule } from '@angular/forms';
import {StarWarsService} from './../swapi-fetch.service';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
   selectedCategory = 'people';

  @Output() dataFetched = new EventEmitter<any>();

  constructor(private starWarsService: StarWarsService) { }

  onSubmit() {
    this.starWarsService.fetchData(this.selectedCategory).subscribe(data => {
      this.dataFetched.emit(data.results);
    });
  }
}
