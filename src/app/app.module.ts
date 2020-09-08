import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ComicsComponent } from './modules/comics/pages/comics/comics.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicCardComponent } from './modules/comics/components/comic-card/comic-card.component';
import { ComicDetailComponent } from './modules/comics/pages/comic-detail/comic-detail.component';
import { CharactersComponent } from './modules/characters/pages/characters/characters.component';
import { CharacterCardComponent } from './modules/characters/components/character-card/character-card.component';
import { CharacterDetailComponent } from './modules/characters/pages/character-detail/character-detail.component';
import { SeriesComponent } from './modules/series/pages/series/series.component';
import { SeriesCardComponent } from './modules/series/components/series-card/series-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComicsComponent,
    ComicCardComponent,
    ComicDetailComponent,
    CharactersComponent,
    CharacterCardComponent,
    CharacterDetailComponent,
    SeriesComponent,
    SeriesCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
