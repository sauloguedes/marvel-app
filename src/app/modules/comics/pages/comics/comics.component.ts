import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Subject, from } from 'rxjs';
import { Comic } from 'src/app/shared/models/comic.model';
import { takeUntil, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators';

@Component({
  selector: 'marvel-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [MarvelService]
})
export class ComicsComponent implements OnInit, OnDestroy {

  loading: boolean

  comics: Comic[]

  searchForm: FormGroup

  // Subscriptions
  private subscriptions: Subject<any>

  constructor(
    private marvelService: MarvelService
  ) {

    //
    this.subscriptions = new Subject<void>()

    this.searchForm = new FormGroup({
      title: new FormControl('')
    })

  }

  ngOnInit(): void {

    this.search('avengers')

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

    this.loading = true

    this.comics = null

    let params = []

    if (searchTerm != '') {
      params.push({ property: 'titleStartsWith', value: searchTerm })
    }

    this.marvelService.getComics(params)
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

        this.comics = data
      }, erro => {
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
