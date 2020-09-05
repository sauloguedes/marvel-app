import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'marvel-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('cardAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('600ms 0s ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  public cardState = 'ready'

  constructor() { }

  ngOnInit(): void {
  }

}
