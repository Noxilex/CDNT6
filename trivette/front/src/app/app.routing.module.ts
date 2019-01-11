import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddComponent } from './components/movies/add/add.component';
import { ListComponent } from './components/movies/list/list.component';
import { DetailsComponent } from './components/movies/details/details.component';

const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'movies',
        children: [
            { path: 'list', component: ListComponent },
            { path: 'add', component: AddComponent },
            { path: ':id', component: DetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
