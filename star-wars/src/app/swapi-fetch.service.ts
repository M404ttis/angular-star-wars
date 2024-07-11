import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {


private baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  fetchData(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${category}/`);
  }

  fetchQueryPeople(people: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}people/?search=${people}`);
  }

  fetchQueryStarships(starships: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}starships/?search=${starships}`);
  }

  fetchQueryVehicles(vehicles: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}vehicles/?search=${vehicles}`);
  }

  /* let's fetch with the selected Item and the user input
  * luckily, the responses for all categories have a "name" property
  */
  fetchQuerySelection(dropDownSelection: string, userInput: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}${dropDownSelection}/?search=${userInput}`);
  }

}
