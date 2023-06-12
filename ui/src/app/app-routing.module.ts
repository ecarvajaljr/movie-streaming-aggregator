import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieStreamingDataComponent } from './movie-streaming-data/movie-streaming-data.component';

const routes: Routes = [
  { path: 'movie-streaming-data', component: MovieStreamingDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
