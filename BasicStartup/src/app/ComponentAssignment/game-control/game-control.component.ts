/// <reference types="@types/node" />
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('startGame') startNumberEmit = new EventEmitter<number>();
  interval: NodeJS.Timer;
  counter = 0;
  constructor () { }

  ngOnInit() {
  }

  startEmitNumber() {
    this.interval = setInterval(() => this.startNumberEmit.emit(this.counter++), 1000);
  }

  stopEmitNumber() {
    clearInterval(this.interval);
  }

}
