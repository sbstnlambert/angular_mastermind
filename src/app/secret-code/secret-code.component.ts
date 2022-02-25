import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'secret-code',
  templateUrl: './secret-code.component.html',
  styleUrls: ['./secret-code.component.scss']
})
export class SecretCodeComponent implements OnInit, OnChanges {

  secretCodes: string[] = [
    'rgb(29, 29, 204)',
    'rgb(187, 36, 36)',
    'rgb(211, 211, 39)',
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
    let count: number = 0;
    for (let s = 0; s < this.currentSuggestion.length; s++) {
      for (let c = 0; c < this.secretCodes.length; c++) {
        if (s == c && this.currentSuggestion[s].color == this.secretCodes[c]) {
          // Green hint
          this.checkedSuggestion.push({ color: this.currentSuggestion[s].color, hint: 'lightgreen' });
          break;
        } else if (this.currentSuggestion[s].color == this.secretCodes[c]) {
          // Yellow hint
          this.checkedSuggestion.push({ color: this.currentSuggestion[s].color, hint: 'orange' });
          break;
        }
        count ++;
      }
      if (count === this.currentSuggestion.length) {
        this.checkedSuggestion.push({ color: this.currentSuggestion[s].color, hint: 'lightcoral'});
      }
      count = 0;
    }
  }

}
