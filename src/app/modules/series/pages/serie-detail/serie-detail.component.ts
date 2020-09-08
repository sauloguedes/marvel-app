import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Serie } from 'src/app/shared/models/serie.model';

@Component({
  selector: 'marvel-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  public serie: Serie
  public comics: any[]
  public characters: any[]
  public events: any[]
  public stories: any[]
  public creators: any[]

  constructor(
    private router: ActivatedRoute,
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {

    this.marvelService.getSerieById(this.router.snapshot.params['id']).subscribe(data => {
      this.serie = data
    }, erro => {
      console.log(erro)
    })

    this.getDetails()
  }

  private getDetails() {

    this.marvelService.getSeriesDetails(this.router.snapshot.params['id']).subscribe(results => {
      this.characters = results[0].data.results
      this.comics = results[1].data.results
      this.events = results[2].data.results
      this.stories = results[3].data.results
    })
  }

}
