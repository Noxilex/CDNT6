import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: '',
      description: '',
      date: Date
    });
  }

  addMovie() {
    this.moviesService.addMovie(this.form.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/movies/list']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
