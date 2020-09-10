import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Observable } from 'rxjs';
import { Events } from 'src/app/shared/models/events.model';

@Component({
  selector: 'marvel-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

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

    this.search()

  }

  public search(): void {

    let params = []

    if (this.searchForm.get('title').value != '') {
      params.push({ property: 'titleStartsWith', value: this.searchForm.get('title').value })
    }

    this.events = this.marvelService.getSeries(params);

  }

}
