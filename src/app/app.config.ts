import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import '@angular/common/locales/global/fr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), { provide: LOCALE_ID, useValue: 'fr' }]
};
