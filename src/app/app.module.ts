import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PagesComponent } from './pages/pages.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { SchedulesComponent } from './pages/tables/schedules/schedules.component';
import { ElectronicQueueComponent } from './pages/tables/electronic-queue/electronic-queue.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { InformationPagesComponent } from './pages/tables/information-pages/information-pages.component';
import { AnnouncementsComponent } from './pages/tables/announcements/announcements.component';
import { SchemesOfWorkComponent } from './monitors/tables/schemes-of-work/schemes-of-work.component';
import { ColorSchemesComponent } from './monitors/tables/color-schemes/color-schemes.component';
import { ActiveMonitorsComponent } from './monitors/tables/active-monitors/active-monitors.component';
import { AdjustingTheColorSchemeComponent } from './adjusting-the-color-scheme/adjusting-the-color-scheme.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    MonitorsComponent,
    DiagnosticsComponent,
    SchedulesComponent,
    ElectronicQueueComponent,
    InformationPagesComponent,
    AnnouncementsComponent,
    SchemesOfWorkComponent,
    ColorSchemesComponent,
    ActiveMonitorsComponent,
    AdjustingTheColorSchemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
