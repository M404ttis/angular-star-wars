import { CommonModule } from '@angular/common';
import { withFetch } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  searchForm = new FormGroup({
    starship: new FormControl(''),
    people: new FormControl(''),
    vehicle: new FormControl(''),
  });


  submitSearch(){
    // FIXME with this help:
    // https://angular.dev/tutorials/first-app/12-forms
    this.searchForm.submitSearch(
      this.searchForm.value.starship ?? '',
      this.searchForm.value.people ?? '',
      this.searchForm.value.vehicle ?? '',
    );
  }

  // TODO: use HttpClient provided by Angular rather than fetch
  SWAPI_base_url = 'https://swapi.dev/api/';
  async fetchToSwapiBaseUrl(): Promise<any>{
   const data = await fetch(this.SWAPI_base_url);
    // flexing with the nullish coalescing
    console.log(data.json());
    return (await data.json()) ?? [];
  }
}
