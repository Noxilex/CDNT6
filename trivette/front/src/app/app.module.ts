import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListComponent } from './components/movies/list/list.component';
import { AppRoutingModule } from './app.routing.module';
import { MoviesService } from './services/movies.service';
import { CardComponent } from './components/card/card.component';
import { AddComponent } from './components/movies/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/movies/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListComponent,
    CardComponent,
    AddComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
