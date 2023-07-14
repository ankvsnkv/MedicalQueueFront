import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjusting-the-color-scheme',
  templateUrl: './adjusting-the-color-scheme.component.html',
  styleUrls: ['./adjusting-the-color-scheme.component.scss']
})
export class AdjustingTheColorSchemeComponent implements OnInit {

  storedTheme: string = localStorage.getItem('theme-color');

  constructor() { }
  ngOnInit() {
  }
  
  setTheme(theme) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }
}
