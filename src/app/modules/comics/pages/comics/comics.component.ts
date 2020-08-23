import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'marvel-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [MarvelService]
})
export class ComicsComponent implements OnInit {

  comics: any[] = []

  constructor(
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {

    this.marvelService.getComics().subscribe(data => {
      this.comics = data
      console.log(data)
    }, erro => {
      console.log(erro)
    })
  }

  search(): void {

  }

}
