import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'marvel-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
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
export class EventCardComponent implements OnInit {

  public eventState = 'ready'

  @Input() event: any

  constructor() { }

  ngOnInit(): void {
  }

}
