import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withState } from '@ngrx/signals';

import { WordStateModel } from './state-model';

const initialState: WordStateModel = {
    words: [],
    word: null,
};

export const WordStore = signalStore(
    { providedIn: 'root' },

    withDevtools('word'),

    withState(initialState),
);
