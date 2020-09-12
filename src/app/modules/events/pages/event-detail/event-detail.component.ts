import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Events } from 'src/app/shared/models/events.model';

@Component({
  selector: 'marvel-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  loading: boolean
  event: Events

  comics: any[] = []
  series: any[] = []
  stories: any[] = []
  characters: any[] = []

  // Subscriptions
  private subscriptions: Subject<any>

  constructor(
    private router: ActivatedRoute,
    private marvelService: MarvelService
  ) {
    this.loading = false
    //
    this.subscriptions = new Subject<void>()
  }

  ngOnInit(): void {

    this.marvelService.getEventById(this.router.snapshot.params['id'])
      // Dealing with subscription
      .pipe(takeUntil(this.subscriptions))
      //
      .subscribe(data => {
        this.event = data
      }, erro => {
        console.log(erro)
      }, () => {
        this.getDetails()
      })

  }

  //
  private getDetails(): void {

    this.marvelService.getEventsDetails(this.router.snapshot.params['id'])
      // Dealing with subscription
      .pipe(takeUntil(this.subscriptions))
      //
      .subscribe(results => {
        this.characters = results[0].data.results
        this.comics = results[1].data.results
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
