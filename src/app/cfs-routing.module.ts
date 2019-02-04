import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { MethodsComponent } from './pages/methods/methods.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'metodos', component: MethodsComponent },
  { path: 'eventos', component: EventsComponent },
];

@NgModule({
  imports: [PagesModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CFSRoutingModule { }
