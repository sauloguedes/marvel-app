import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { Comic } from 'src/app/shared/models/comic.model';

@Component({
  selector: 'marvel-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css'],
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
export class ComicCardComponent implements OnInit {

  public comicState = 'ready'

  @Input() comic: Comic

  constructor() { }

  ngOnInit(): void {

  }

}
