import { inject } from '@angular/core';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { LanguageAPI } from '@api/language-api';
import { LanguageModel } from '@model/language-model';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, of, pipe, switchMap, tap } from 'rxjs';

import { AppStateModel } from './state-model';

const initialState: AppStateModel = {
    isLoading: false,
    languages: [],
    language: null,
};

export const AppStore = signalStore(
    { providedIn: 'root' },

    withDevtools('app'),

    withState(initialState),

    withMethods((store, languageAPI = inject(LanguageAPI)) => ({
        selectLanguage(language: LanguageModel) {
            patchState(store, { language });
        },

        getLanguages: rxMethod<void>(
            pipe(
                tap(() => {
                    patchState(store, { isLoading: true });
                }),
                switchMap(() => {
                    return languageAPI.get$().pipe(
                        tap((languages) => {
                            patchState(store, {
                                languages,
                                isLoading: false,
                            });
                        }),
                    );
                }),
                catchError((error) => {
                    return of(error);
                }),
            ),
        ),
    })),
);
