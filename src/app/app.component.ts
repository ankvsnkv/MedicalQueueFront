import { Component } from '@angular/core';
import { loadScheme } from './shared/functions/load-scheme.function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MedicalQueueFront';
  schemePath = 'assets/first.scheme.css';

  ngOnInit() {
    loadScheme(this.schemePath);
  }

}


