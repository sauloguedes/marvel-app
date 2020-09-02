import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'marvel-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [MarvelService]
})
export class ComicsComponent implements OnInit {

  comics: any[] = []

  searchForm: FormGroup

  constructor(
    private marvelService: MarvelService
  ) {

    this.searchForm = new FormGroup({
      title: new FormControl()
    })

  }

  ngOnInit(): void {

    this.marvelService.getComics().subscribe(data => {
      this.comics = data
      console.log(data)
    }, erro => {
      console.log(erro)
    })

  }

  public search(): void {

    let params = []

    if (this.searchForm.get('title').value != '') {
      params.push({ property: 'titleStartsWith', value: this.searchForm.get('title').value })
    }

    this.marvelService.getComics(params).subscribe(data => {
      this.comics = data
      console.log(data)
    }, erro => {
      console.log(erro)
    })

  }

}
