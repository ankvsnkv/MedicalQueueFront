import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdjustingTheColorSchemeComponent } from './adjusting-the-color-scheme/adjusting-the-color-scheme.component';

@NgModule({
  declarations: [
    AppComponent,
    AdjustingTheColorSchemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
