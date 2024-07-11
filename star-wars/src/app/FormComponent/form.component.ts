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
export class FormComponent implements OnInit {
  selectedCategory: string = 'people';
  userInput: string = '';
  searchResults: any[] = [];

  people: any[] = [];
  vehicles: any[] = [];
  starships: any[] = [];

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {

  // fetch people
      this.starWarsService.fetchData('people').subscribe({
        next: data => this.people = data.results,
        error: err => console.error('Error fetchign the 👯 people 😨', err),
        complete: () => console.log('People 👯 fetching completed 💯')
    });
  }
  handleData(data: any){
    this.people = data;
    console.log(data);
  }


  @Output() dataFetched = new EventEmitter<any>();


  onSubmit(): void {

    if(this.selectedCategory && this.userInput){
      this.starWarsService.fetchQuerySelection(this.selectedCategory, this.userInput).subscribe(
        data => { this.searchResults = data.results}
      ),
      error => {console.error('😭 fetch with category and user Input failed', error ); }
    }
    this.starWarsService.fetchData(this.selectedCategory).subscribe(data => {
      this.dataFetched.emit(data.results);
    });
  }
}
