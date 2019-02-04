import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SocialMediaNavbarComponent } from './social-media-navbar/social-media-navbar.component';
import { SiteNavbarComponent } from './site-navbar/site-navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [MainNavigationComponent, SocialMediaNavbarComponent, SiteNavbarComponent, FooterComponent],
  exports: [MainNavigationComponent, SocialMediaNavbarComponent, SiteNavbarComponent],
  imports: [CommonModule, RouterModule]
})
export class LayoutModule { }
