import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CFSModule } from './app/cfs.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CFSModule, [
  {
    defaultEncapsulation: ViewEncapsulation.None
  }
])
  .catch(err => console.error(err));
