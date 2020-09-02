import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Comic } from 'src/app/shared/models/comic.model';

@Component({
  selector: 'marvel-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css'],
  providers: [MarvelService]
})
export class ComicDetailComponent implements OnInit {

  public comic: Comic
  public characters: any
  public events: any
  public stories: any

  constructor(
    private router: ActivatedRoute,
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {

    this.marvelService.getComicById(this.router.snapshot.params['id']).subscribe(data => {
      this.comic = data
    }, erro => {
      console.log(erro)
    })

    this.getDetails()
  }

  getDetails() {

    this.marvelService.getComicDetails(this.router.snapshot.params['id']).subscribe(results => {
      this.characters = results[0].data.results
      this.events = results[1].data.results
      this.stories = results[2].data.results
    })
  }

}
