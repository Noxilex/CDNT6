import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8000/movies')
      .pipe(map(data => {
        data.map(movie => {
          movie.date = new Date(movie.date);
        });
        return data;
      }));
  }

  addMovie(data): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:8000/movies/', data);
  }

  deleteMovie(id): Observable<Movie> {
    return this.http.delete<Movie>('http://localhost:8000/movies/' + id);
  }
}
