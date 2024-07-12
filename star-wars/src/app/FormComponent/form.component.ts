import { CommonModule } from '@angular/common';
import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import {StarWarsService} from './../swapi-fetch.service';
import { HighlightFilmsService } from './../highlight-films.service';

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

  constructor(
    private starWarsService: StarWarsService,
    private highlightFilmService: HighlightFilmsService
  ) { }

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
        console.log("hi from inside extractEpisodeIds");
        console.log("match", match);
         episodeIds.push(Number(match[1]))
        }
      });
      return episodeIds;
    }

  // @Output() dataFetched = new EventEmitter<any>();


  onSubmit(): void {

    console.log("onSubmit clicked")
    if(this.selectedCategory && this.userInput){
      this.starWarsService.fetchQuerySelection(this.selectedCategory, this.userInput).subscribe(
        data => {
          this.searchResults = data.results
          console.log("is this even reached?? ")
          console.log("data.results.films", data.results.films)

          // look, I even stored the Id's in a variable...
          const episodeIds = this.extractEpisodeIds(data.results.films);
          // TODO: use the highlight-film.service now
          this.highlightFilmService.highlightFilms(episodeIds);
        }
      ),
      (error: Error)  => {console.error('😭 fetch with category and user Input failed', error ); }
    }
  }
}
