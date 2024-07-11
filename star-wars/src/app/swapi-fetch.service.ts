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

}
