import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/core/services/marvel.service';

import { Subject, from } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Serie } from 'src/app/shared/models/serie.model';
import { Comic } from 'src/app/shared/models/comic.model';
import { Character } from 'src/app/shared/models/character.model';
import { Events } from 'src/app/shared/models/events.model';
import { Story } from 'src/app/shared/models/stories.model';
import { Creator } from 'src/app/shared/models/creators.model';

@Component({
  selector: 'marvel-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit, OnDestroy {

  public serie: Serie
  public comics: Comic[]
  public characters: Character[]
  public events: Events[]
  public stories: Story[]
  public creators: Creator[]

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

  private getDetails() {

    this.marvelService.getSerieById(this.router.snapshot.params['id'])
      //
      .pipe(takeUntil(this.subscriptions))
      //
      .subscribe(data => {
        this.serie = data
      }, erro => {
        console.log(erro)
      })

    this.marvelService.getSeriesDetails(this.router.snapshot.params['id'])
      //
      .pipe(takeUntil(this.subscriptions))
      //
      .subscribe(results => {
        this.characters = results[0].data.results
        this.comics = results[1].data.results
        this.events = results[2].data.results
        this.stories = results[3].data.results
      })
  }

  //
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.next();
    this.subscriptions.complete();
  }

}
