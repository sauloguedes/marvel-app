import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Character } from 'src/app/shared/models/character.model';

@Component({
  selector: 'marvel-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  providers: [MarvelService]
})
export class CharacterDetailComponent implements OnInit {

  character: Character

  comics: any[] = []
  series: any[] = []
  stories: any[] = []
  events: any[] = []

  constructor(
    private router: ActivatedRoute,
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {

    this.marvelService.getCharacterById(this.router.snapshot.params['id']).subscribe(data => {
      this.character = data
    }, erro => {
      console.log(erro)
    })

    this.getDetails()

  }

  private getDetails(): void {

    this.marvelService.getCharactersDetails(this.router.snapshot.params['id']).subscribe(results => {
      this.comics = results[0].data.results
      this.events = results[1].data.results
      this.stories = results[2].data.results
    })

  }

}
