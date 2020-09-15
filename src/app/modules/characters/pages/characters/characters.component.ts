import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Character } from 'src/app/shared/models/character.model';
import { Subject, from } from 'rxjs';
import { takeUntil, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators';

@Component({
  selector: 'marvel-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {

  loading: boolean

  characters: Character[] = []

  searchForm: FormGroup

  // Subscriptions
  private subscriptions: Subject<any>

  constructor(
    private marvelService: MarvelService
  ) {

    //
    this.subscriptions = new Subject<void>()
    //
    this.searchForm = new FormGroup({
      name: new FormControl()
    })

  }

  ngOnInit(): void {
    //
    this.search('')
    //
    this.searchForm.get('name').valueChanges.pipe(
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
    this.characters = null
    // Params array
    let params = []

    if (searchTerm != '') {
      params.push({ property: 'nameStartsWith', value: searchTerm })
    }

    this.marvelService.getCharacters(params)
      //
      .pipe(
        //
        takeUntil(this.subscriptions),
        //
        catchError(error => from([]))
      )
      .subscribe(data => {
        //
        this.loading = false
        //
        this.characters = data
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
