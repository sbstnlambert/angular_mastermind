import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'secret-code',
  templateUrl: './secret-code.component.html',
  styleUrls: ['./secret-code.component.scss']
})
export class SecretCodeComponent implements OnInit, OnChanges {

  secretCodes!: string[];

  colors: string[] = [
    'rgb(187, 36, 36)',
    'rgb(21, 109, 21)',
    'rgb(29, 29, 204)',
    'rgb(211, 211, 39)',
    'rgb(173, 42, 173)',
    'rgb(119, 30, 30)',
    'rgb(240, 159, 10)'
  ];

  checkedSuggestion: { color: string, hint: string }[] = [];

  @Input('current-suggestion')
  currentSuggestion!: { color: string, hint: string }[];

  @Output('hints')
  emitterHints = new EventEmitter<{ color: string, hint: string }[]>();

  @Input('try-again-to-input')
  tryAgainToInput!: boolean;

  @Output('regenerate-secret-code')
  emitterNewSecretCode = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.generateSecretCode();
  }

  generateSecretCode() {
    this.secretCodes = [];
    for (let i = 0; i < 4; i++) {
      this.secretCodes.push(this.colors[Math.floor(Math.random()*7)]);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentSuggestion !== undefined) {
      this.checkUserSuggestion();
      this.emitterHints.emit(this.checkedSuggestion);
      this.checkedSuggestion = [];
    }
    if (this.tryAgainToInput === true) {
      this.generateSecretCode();
      this.emitterNewSecretCode.emit();
    }
  }

  checkUserSuggestion() {
    this.currentSuggestion.forEach(cell => this.checkedSuggestion.push(cell));

    this.checkedSuggestion
      .filter(e => e.color === this.secretCodes[this.checkedSuggestion.indexOf(e)])
      .forEach(c => c.hint = 'lightgreen');

    for (let s = 0; s < this.checkedSuggestion.length; s++) {
      if (this.checkedSuggestion[s].hint !== 'lightgreen') {
        for (let c = 0; c < this.secretCodes.length; c++) {
          if (s !== c 
              && this.checkedSuggestion[s].color === this.secretCodes[c] 
              && this.checkedSuggestion[c].hint !== 'lightgreen') {
              this.checkedSuggestion[s].hint = 'orange';
          }
        }
      }
    }

    this.checkedSuggestion
      .filter(e => e.hint === 'white')
      .forEach(e => e.hint = 'lightcoral');
  }

}
