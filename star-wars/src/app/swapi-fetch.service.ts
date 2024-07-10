import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiFetchService {

  private films: any; // holds the response data

  constructor(private http: HttpClient) {}

    fetchData(url:string): void {
      this.http.get(url).subscribe(
        (response) => {
            this.films = response;
            console.log(this.films);
          },
        (error) => {
          console.error('upsi daisy, s.th. went wrong', error);
        }
    )
  }
  getFilms(): any {return this.films}

}
