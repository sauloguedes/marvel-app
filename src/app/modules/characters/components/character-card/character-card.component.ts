import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Character } from 'src/app/shared/models/character.model';

@Component({
  selector: 'marvel-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
  animations: [
    trigger('cardAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class CharacterCardComponent implements OnInit {

  public characterState = 'ready'

  @Input() character: Character

  constructor() { }

  ngOnInit(): void {

  }

}
