import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'marvel-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: any[] = []

  searchForm: FormGroup

  public loading: boolean

  constructor(
    private marvelService: MarvelService
  ) {

    this.searchForm = new FormGroup({
      title: new FormControl()
    })

  }

  ngOnInit(): void {

    this.loading = true

    this.marvelService.getSeries().subscribe(data => {
      //
      this.series = data
      //
      this.loading = false
    }, erro => {
      console.log(erro)
    })

  }

  public search(): void {

    let params = []

    if (this.searchForm.get('title').value != '') {
      params.push({ property: 'titleStartsWith', value: this.searchForm.get('title').value })
    }

    this.marvelService.getSeries(params).subscribe(data => {
      this.series = data
      console.log(data)
    }, erro => {
      console.log(erro)
    })

  }

}
