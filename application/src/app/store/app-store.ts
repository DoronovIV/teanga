import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withState } from '@ngrx/signals';

import { AppStateModel } from './state-model';

const initialState: AppStateModel = {
    isLoading: false,
};

export const AppStore = signalStore(
    { providedIn: 'root' },

    withDevtools('app'),

    withState(initialState),
);
