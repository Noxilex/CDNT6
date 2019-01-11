import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies: Movie[] = [];
  moviesService: MoviesService;
  constructor(moviesService: MoviesService) {
    this.moviesService = moviesService;
  }

  ngOnInit() {
    this.moviesService
      .findAll()
      .subscribe(
        data => this.movies = data
      );
  }

  deleteMessage(index) {
    const id = this.movies[index].id;
    this.moviesService.deleteMovie(id)
      .subscribe(
        data => {
          console.log('Delete successful');
          this.movies.splice(index, 1);
          console.log(data);
        },
        error => {
          console.log('Delete error');
          console.log(error);
        }
      );
    // this.moviesService.
  }

}
