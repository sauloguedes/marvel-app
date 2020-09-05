import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ComicsComponent } from './modules/comics/pages/comics/comics.component';
import { ComicDetailComponent } from './modules/comics/pages/comic-detail/comic-detail.component';
import { CharactersComponent } from './modules/characters/pages/characters/characters.component';

const routes: Routes = [

  { path: "", component: HomeComponent },

  { path: "comics", component: ComicsComponent },

  { path: "comics/:id", component: ComicDetailComponent },

  { path: "characters", component: CharactersComponent },

  // { path: "**", redirectTo: "" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
