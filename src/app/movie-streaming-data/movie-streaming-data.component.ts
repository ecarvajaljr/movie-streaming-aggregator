import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../service/movie.service';

@Component({
  selector: 'app-movie-streaming-data',
  templateUrl: './movie-streaming-data.component.html',
  styleUrls: ['./movie-streaming-data.component.scss']
})
export class MovieStreamingDataComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

}

