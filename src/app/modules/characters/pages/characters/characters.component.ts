import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Character } from 'src/app/shared/models/character.model';

@Component({
  selector: 'marvel-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = []

  searchForm: FormGroup

  constructor(
    private marvelService: MarvelService
  ) {

    this.searchForm = new FormGroup({
      name: new FormControl()
    })

  }

  ngOnInit(): void {

    this.marvelService.getCharacters().subscribe(data => {
      this.characters = data
      console.log(data)
    }, erro => {
      console.log(erro)
    })

  }

  public search(): void {

    let params = []

    if (this.searchForm.get('name').value != '') {
      params.push({ property: 'nameStartsWith', value: this.searchForm.get('name').value })
    }

    this.marvelService.getCharacters(params).subscribe(data => {
      this.characters = data
      console.log(data)
    }, erro => {
      console.log(erro)
    })

  }

}
