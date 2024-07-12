import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightFilmsService {

  constructor() { }

  private highlightedFilmsSource = new BehaviorSubject<number[]>([])
  highlightedFilms$ = this.highlightedFilmsSource.asObservable();

  highlightFilms(filmIds: number[]) {
    this.highlightedFilmsSource.next(filmIds);
  }
}
