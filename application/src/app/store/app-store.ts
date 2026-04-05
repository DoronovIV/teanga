import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withMethods, withState } from '@ngrx/signals';

import { AppStateModel } from './state-model';

const initialState: AppStateModel = {
    routeUrl: '/',
    objectId: null,
};

export const AppStore = signalStore(
    { providedIn: 'root' },

    withDevtools('app'),

    withState(initialState),

    withMethods((store) => ({
        setRoutingData(url: string, id: number | string | null) {
            updateState(store, '[Application] Set Routing Data', { routeUrl: url, objectId: id });
        },
    })),
);
