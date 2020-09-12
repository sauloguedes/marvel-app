import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Events } from 'src/app/shared/models/events.model';

import { Observable, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'marvel-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  loading: boolean

  events: Observable<Events[]>

  searchForm: FormGroup

  constructor(
    private marvelService: MarvelService
  ) {

    this.searchForm = new FormGroup({
      title: new FormControl('')
    })

  }

  ngOnInit(): void {

    this.search('')

    this.searchForm.get('title').valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(data => {
      //
      this.search(data)
    })

  }

  public search(searchTerm = ''): void {

    this.loading = true

    let params = []

    if (searchTerm != '') {
      params.push({ property: 'titleStartsWith', value: searchTerm })
    }

    this.events = this.marvelService.getSeries(params)
      .pipe(
        catchError(error => from([])),
        tap(() => this.loading = false)
      );

  }

}
