import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withMethods, withState } from '@ngrx/signals';

import { AppStateModel } from './state-model';

const initialState: AppStateModel = {
    theme: 'dark',
    objectId: null,
    routeUrl: '/',
};

export const AppStore = signalStore(
    { providedIn: 'root' },

    withDevtools('app'),

    withState(initialState),

    withMethods((store) => ({
        setTheme(theme: 'light' | 'dark') {
            updateState(store, '[Application] Set Theme', { theme });
        },

        setRoutingData(url: string, id: number | string | null) {
            updateState(store, '[Application] Set Routing Data', { routeUrl: url, objectId: id });
        },
    })),
);
