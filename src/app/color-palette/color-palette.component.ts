import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {

  colors: string[] = [
    'rgb(187, 36, 36)',
    'rgb(21, 109, 21)',
    'rgb(29, 29, 204)',
    'rgb(211, 211, 39)',
    'rgb(173, 42, 173)',
    'rgb(119, 30, 30)',
    'rgb(240, 159, 10)'
  ];

  @Output('user-choice')
  emitterChoice = new EventEmitter<string>();

  @Output('validate')
  emitterValidate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getUserChoice(color: string) {
    this.emitterChoice.emit(color);
  }

  onValidate() {
    this.emitterValidate.emit();
  }

}