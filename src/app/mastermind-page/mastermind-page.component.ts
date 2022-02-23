import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermind-page',
  templateUrl: './mastermind-page.component.html',
  styleUrls: ['./mastermind-page.component.scss']
})
export class MastermindPageComponent implements OnInit {

  emptyUnitPegs: string[] = [
    'rgb(230, 230, 230)',
    'rgb(230, 230, 230)',
    'rgb(230, 230, 230)',
    'rgb(230, 230, 230)'
  ];

  tab: string[][] = [];
  userSuggestion: string[] = this.tab[0];

  boardUnitNumber: number = 8;

  rowIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.boardUnitNumber; i++) {
      this.tab.push(
        ['rgb(230, 230, 230)',
          'rgb(230, 230, 230)',
          'rgb(230, 230, 230)',
          'rgb(230, 230, 230)']
      );
    }
  }

  // Apply user's choice of color to the first empty peg found on the board unit
  applyUserChoice(event: string) {
    let index = this.tab[this.rowIndex].findIndex(element => element == 'rgb(230, 230, 230)');
    this.tab[this.rowIndex][index] = event;
  }

  // Validate a full-combination row
  validate() {
    if (!this.tab[this.rowIndex].includes('rgb(230, 230, 230)'))
      this.rowIndex++;
    else
      alert('[ERROR] There\'s still at least a missing peg!');
  }

}