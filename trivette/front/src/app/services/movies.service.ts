import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8000/movies')
      .pipe(map(data => {
        console.log(data);
        return data;
      }));
  }
}
