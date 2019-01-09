import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChuckNorrisModel } from '../models/chuck-norris.model';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.scss']
})
export class ChucknorrisComponent implements OnInit {
  model: ChuckNorrisModel = new ChuckNorrisModel();
  error: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getQuote();

    interval(1000 * 20).subscribe(
      () => this.getQuote()
    );
  }

  getQuote() {
    return this.http.get<ChuckNorrisModel>('https://api.chucknorris.io/jokes/random')
      .pipe(map(data => data))
      .subscribe(
        data => {
          this.model = data;
        },
        err => {
          this.error = err;
        }
      );
  }

}
