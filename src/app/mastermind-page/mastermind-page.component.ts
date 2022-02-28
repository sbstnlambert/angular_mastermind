import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermind-page',
  templateUrl: './mastermind-page.component.html',
  styleUrls: ['./mastermind-page.component.scss']
})
export class MastermindPageComponent implements OnInit {

  boardgame: { color: string, hint: string }[][] = [];

  boardUnitNumber: number = 8;

  rowIndex: number = 0;

  currentSuggestion!: { color: string, hint: string }[];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.boardUnitNumber; i++) {
      this.boardgame.push([
        { color: 'rgb(230, 230, 230)', hint: 'white' },
        { color: 'rgb(230, 230, 230)', hint: 'white' },
        { color: 'rgb(230, 230, 230)', hint: 'white' },
        { color: 'rgb(230, 230, 230)', hint: 'white' }
      ]);
    }
  }

  // Apply user's choice of color to the first empty peg found on the board unit
  applyUserChoice(event: string) {
    let index = this.boardgame[this.rowIndex].findIndex(element => element.color === 'rgb(230, 230, 230)');
    this.boardgame[this.rowIndex][index] = { color: event, hint: 'white' };
  }

  // Validate a full-combination row
  onValidate(event: { color: string, hint: string }[]) {
    if (!this.boardgame[this.rowIndex].map(element => element.color).includes('rgb(230, 230, 230)')) {
      this.rowIndex++;
      this.currentSuggestion = event;
    }
    else {
      alert('[ERROR] There\'s still at least a missing peg!');
    }
  }

  // Reset user's suggestion row
  onReset() {
    for (let cell of this.boardgame[this.rowIndex]) {
      cell.color = 'rgb(230, 230, 230)';
    }
  }

  displayHints(event: { color: string, hint: string }[]) {
    for (let i = 0; i < event.length; i++) {
      this.boardgame[this.rowIndex-1][i].color = event[i].color;
      this.boardgame[this.rowIndex-1][i].hint = event[i].hint;
    }
  }

}