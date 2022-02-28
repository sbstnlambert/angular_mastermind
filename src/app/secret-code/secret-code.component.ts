import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'secret-code',
  templateUrl: './secret-code.component.html',
  styleUrls: ['./secret-code.component.scss']
})
export class SecretCodeComponent implements OnInit, OnChanges {

  secretCodes: string[] = [
    'rgb(21, 109, 21)',
    'rgb(187, 36, 36)',
    'rgb(29, 29, 204)',
    'rgb(21, 109, 21)'
  ];

  checkedSuggestion: { color: string, hint: string }[] = [];

  @Input('current-suggestion')
  currentSuggestion!: { color: string, hint: string }[];

  @Output('hints')
  emitterHints = new EventEmitter<{ color: string, hint: string }[]>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentSuggestion !== undefined) {
      this.checkUserSuggestion();
      console.log(this.checkedSuggestion);
      this.emitterHints.emit(this.checkedSuggestion);
      this.checkedSuggestion = [];
    } else {
      console.log('Ratey');
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
