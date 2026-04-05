import {
    ApplicationConfig,
    inject,
    provideAppInitializer,
    provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { RouterSyncService } from '@service/router-sync-service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        RouterSyncService,
        provideAppInitializer(() => {
            inject(RouterSyncService);
        }),
    ],
};
