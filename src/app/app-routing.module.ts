import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ComicsComponent } from './modules/comics/pages/comics/comics.component';
import { ComicDetailComponent } from './modules/comics/pages/comic-detail/comic-detail.component';
import { CharactersComponent } from './modules/characters/pages/characters/characters.component';
import { CharacterDetailComponent } from './modules/characters/pages/character-detail/character-detail.component';
import { SeriesComponent } from './modules/series/pages/series/series.component';
import { SerieDetailComponent } from './modules/series/pages/serie-detail/serie-detail.component';

const routes: Routes = [

  { path: "", component: HomeComponent },

  { path: "comics", component: ComicsComponent },

  { path: "comics/:id", component: ComicDetailComponent },

  { path: "characters", component: CharactersComponent },

  { path: "characters/:id", component: CharacterDetailComponent },

  { path: "series", component: SeriesComponent },

  { path: "series/:id", component: SerieDetailComponent },

  { path: "**", redirectTo: "" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
