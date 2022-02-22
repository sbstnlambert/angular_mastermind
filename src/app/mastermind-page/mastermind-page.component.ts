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

  boardUnitNumber: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
