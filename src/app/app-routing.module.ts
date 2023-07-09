import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
// http://localhost:4200/ -> PagesComponent
// http://localhost:4200/monitors -> MonitorsComponent
// http://localhost:4200/diagnostics -> DiagnosticsComponent
const routes: Routes = [
  {path: '', component: PagesComponent},
  {path: 'monitors', component: MonitorsComponent},
  {path: 'diagnostics', component: DiagnosticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
