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

    this.starWarsService.fetchData(this.selectedCategory).subscribe(data => {
      this.dataFetched.emit(data.results);
    });

  }

  @Output() dataFetched = new EventEmitter<any>();


  onSubmit(): void {

    if(this.selectedCategory && this.userInput){
      this.starWarsService.fetchQuerySelection(this.selectedCategory, this.userInput).subscribe(
        data => {
          this.searchResults = data.results
          console.log(data.results)
          // TODO: fire event, that broadcasts the films, that starr the searchResult
          // TODO: make the filmCards consume the event and react with adding a class to self
          // TODO: delete that highlight class when fetchQueryselection-event is fired
        }
      ),
      (error: Error)  => {console.error('😭 fetch with category and user Input failed', error ); }
    }
  }
}
