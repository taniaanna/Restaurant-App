import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IMAGE_LOADER } from '@angular/common';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),FormsModule,{ provide: IMAGE_LOADER, useValue: { disableImageSizeWarning: true, disableImageLazyLoadWarning: true } } ]
};
