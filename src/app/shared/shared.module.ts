import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SectionImageComponent } from './components/section-image/section-image.component';
import { SectionVideoComponent } from './components/section-video/section-video.component';

@NgModule({
  declarations: [SectionImageComponent, SectionVideoComponent],
  exports: [SectionImageComponent, SectionVideoComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule { }
