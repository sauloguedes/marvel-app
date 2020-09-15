import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/core/services/marvel.service';

import { Subject, from } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Character } from 'src/app/shared/models/character.model';
import { Comic } from 'src/app/shared/models/comic.model';
import { Serie } from 'src/app/shared/models/serie.model';
import { Events } from 'src/app/shared/models/events.model';
import { Story } from 'src/app/shared/models/stories.model';

@Component({
  selector: 'marvel-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  providers: [MarvelService]
})
export class CharacterDetailComponent implements OnInit, OnDestroy {

  public character: Character

  public comics: Comic[] = []
  public series: Serie[] = []
  public stories: Story[] = []
  public events: Events[] = []

  // Subscriptions
  private subscriptions: Subject<any>

  constructor(
    private router: ActivatedRoute,
    private marvelService: MarvelService
  ) {
    //
    this.subscriptions = new Subject<void>()
  }

  ngOnInit(): void {
    //
    this.getDetails()

  }

  private getDetails(): void {

    // Getting main character information
    this.marvelService.getCharacterById(this.router.snapshot.params['id'])
      //
      .pipe(takeUntil(this.subscriptions))
      //
      .subscribe(data => {
        this.character = data
      })

    // Getting addional character information
    this.marvelService.getCharactersDetails(this.router.snapshot.params['id'])
      //
      .pipe(takeUntil(this.subscriptions))
      //
      .subscribe(results => {
        this.comics = results[0].data.results
        this.events = results[1].data.results
        this.stories = results[2].data.results
      })

  }

  //
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.next();
    this.subscriptions.complete();
  }

}
