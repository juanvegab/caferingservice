import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CFSRoutingModule } from './cfs-routing.module';
import { CFSComponent } from './cfs.component';
import { LayoutModule } from './core/layout/layout.module';

@NgModule({
  declarations: [
    CFSComponent,
  ],
  imports: [
    BrowserModule,
    CFSRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [CFSComponent]
})
export class CFSModule { }
