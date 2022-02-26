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
    let noneMatchCount: number = 0;
    // let redSecretColorCount = 0;
    // let greenSecretColorCount = 0;
    // let blueSecretColorCount = 0;
    // let yellowSecretColorCount = 0;
    // let purpleSecretColorCount = 0;
    // let brownSecretColorCount = 0;
    // let orangeSecretColorCount = 0;

    // for (let c = 0; c < this.secretCodes.length; c++) {
    //   switch (this.secretCodes[c]) {
    //     case 'rgb(187, 36, 36)':
    //       redSecretColorCount++;
    //       break;
    //     case 'rgb(21, 109, 21)':
    //       greenSecretColorCount++;
    //       break;
    //     case 'rgb(29, 29, 204)':
    //       blueSecretColorCount++;
    //       break;
    //     case 'rgb(211, 211, 39)':
    //       yellowSecretColorCount++;
    //       break;
    //     case 'rgb(173, 42, 173)':
    //       purpleSecretColorCount++;
    //       break;
    //     case 'rgb(119, 30, 30)':
    //       brownSecretColorCount++;
    //       break;
    //     case 'rgb(240, 159, 10)':
    //       orangeSecretColorCount++;
    //       break;
    //       default:
    //         break;
    //   }
    // }
    // console.log('Red color found: ' + redSecretColorCount);
    // console.log('Green color found: ' + greenSecretColorCount);
    // console.log('Blue color found: ' + blueSecretColorCount);
    // console.log('Yellow color found: ' + yellowSecretColorCount);
    // console.log('Purple color found: ' + purpleSecretColorCount);
    // console.log('Brown color found: ' + brownSecretColorCount);
    // console.log('Orange color found: ' + orangeSecretColorCount);
    let currentColorCount: number = 0;
    
    for (let s = 0; s < this.currentSuggestion.length; s++) {
      for (let c = 0; c < this.secretCodes.length; c++) {
        if (s == c && this.currentSuggestion[s].color == this.secretCodes[c]) {
          // Green hint
          this.checkedSuggestion.push({ color: this.currentSuggestion[s].color, hint: 'lightgreen' });
          break;
        } else if (this.currentSuggestion[s].color == this.secretCodes[c]) {
          // Orange hint
          this.checkedSuggestion.push({ color: this.currentSuggestion[s].color, hint: 'rgb(255, 192, 74)' });
          break;
        }
        noneMatchCount++;
      }
      if (noneMatchCount === this.currentSuggestion.length) {
        // Red hint
        this.checkedSuggestion.push({ color: this.currentSuggestion[s].color, hint: 'lightcoral'});
      }
      noneMatchCount = 0;
    }
  }

}
