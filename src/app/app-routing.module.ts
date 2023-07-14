import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions  } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { AdjustingTheColorSchemeComponent } from './adjusting-the-color-scheme/adjusting-the-color-scheme.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

// http://localhost:4200/ -> PagesComponent
// http://localhost:4200/monitors -> MonitorsComponent
// http://localhost:4200/diagnostics -> DiagnosticsComponent
const routes: Routes = [
  {path: '', component: PagesComponent},
  {path: 'monitors', component: MonitorsComponent},
  {path: 'monitors/color_scheme_editor', component: AdjustingTheColorSchemeComponent},
  {path: 'diagnostics', component: DiagnosticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
