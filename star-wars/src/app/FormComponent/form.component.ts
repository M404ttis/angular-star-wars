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

  @Output() highlightFilms: EventEmitter<number[]> = new EventEmitter<number[]>();

  people: any[] = [];
  vehicles: any[] = [];
  starships: any[] = [];

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {

    /*
    this.starWarsService.fetchData(this.selectedCategory).subscribe(data => {
      this.dataFetched.emit(data.results);
    });
    */

}
    extractEpisodeIds(urls: string[]): number[]{
      const regex = /\/(\d+)\/$/
      const episodeIds: number[] = [];
      urls.forEach(url => {
        const match = url.match(regex);
        if (match) {
         episodeIds.push(Number(match[1]))
        }
      });
      return episodeIds;
    }

  // @Output() dataFetched = new EventEmitter<any>();


  onSubmit(): void {

    if(this.selectedCategory && this.userInput){
      this.starWarsService.fetchQuerySelection(this.selectedCategory, this.userInput).subscribe(
        data => {
          this.searchResults = data.results
          console.log(data.results)
          // TODO: fire event, that broadcasts the films, that starr the searchResult
          // TODO: make the filmCards consume the event and react with adding a class to self
          // TODO: delete that highlight class when fetchQueryselection-event is fired
          this.highlightFilms.emit(this.extractEpisodeIds(data.results.films));
        }
      ),
      (error: Error)  => {console.error('😭 fetch with category and user Input failed', error ); }
    }
  }
}
