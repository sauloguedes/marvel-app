import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/core/services/marvel.service';

import { Subject, from } from 'rxjs';
import { takeUntil, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators';

import { Serie } from 'src/app/shared/models/serie.model';

@Component({
  selector: 'marvel-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit, OnDestroy {

  public series: Serie[] = []

  public searchForm: FormGroup

  public loading: boolean

  // Subscriptions
  private subscriptions: Subject<any>

  constructor(
    private marvelService: MarvelService
  ) {

    //
    this.subscriptions = new Subject<void>()

    this.searchForm = new FormGroup({
      title: new FormControl()
    })

  }

  ngOnInit(): void {
    //
    this.search('')
    //
    this.searchForm.get('title').valueChanges.pipe(
      //
      debounceTime(1000),
      //
      distinctUntilChanged()

    ).subscribe(data => {
      //
      this.search(data)
    })
  }

  public search(searchTerm = ''): void {
    //
    this.loading = true
    //
    this.series = null
    //
    let params = []

    if (searchTerm != '') {
      params.push({ property: 'titleStartsWith', value: searchTerm })
    }

    this.marvelService.getSeries(params)
      //
      .pipe(
        //
        takeUntil(this.subscriptions),
        //
        catchError(error => from([]))
      )
      //
      .subscribe(data => {
        //
        this.loading = false
        //
        this.series = data
      }, erro => {
        //
        this.loading = false
      })

  }

  //
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.next();
    this.subscriptions.complete();
  }

}
