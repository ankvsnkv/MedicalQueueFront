import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adjusting-the-color-scheme',
  templateUrl: './adjusting-the-color-scheme.component.html',
  styleUrls: ['./adjusting-the-color-scheme.component.scss']
})
export class AdjustingTheColorSchemeComponent implements OnInit {


  ngOnInit() {
  }
  constructor(private router: Router) { }
  goBack() {
    this.router.navigate(['/monitors']);
  }
}
