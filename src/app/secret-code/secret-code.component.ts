import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-code',
  templateUrl: './secret-code.component.html',
  styleUrls: ['./secret-code.component.scss']
})
export class SecretCodeComponent implements OnInit {

  secretCodes: string[] = [
    'blue',
    'red',
    'gold',
    'green'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
