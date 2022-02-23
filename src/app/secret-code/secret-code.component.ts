import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'secret-code',
  templateUrl: './secret-code.component.html',
  styleUrls: ['./secret-code.component.scss']
})
export class SecretCodeComponent implements OnInit {

  secretCodes: string[] = [
    'rgb(29, 29, 204)',
    'rgb(187, 36, 36)',
    'rgb(211, 211, 39)',
    'rgb(21, 109, 21)'
  ];

  @Input('user-suggestion')
  userSuggestion!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
