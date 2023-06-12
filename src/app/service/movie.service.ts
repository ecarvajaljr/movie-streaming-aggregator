import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//create an interface for the data we are expecting to receive from the API
export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: string
  runtime: number;
  genres: string;
  director: string;
  actors: string;
  country: string;
  plot: string;
  posterUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<Movie[]>('assets/movies.json');
  }

}
