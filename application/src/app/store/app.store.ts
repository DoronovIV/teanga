import { inject } from '@angular/core';
import { withDevtools, updateState } from '@angular-architects/ngrx-toolkit';
import { LanguageAPI } from '@api/language-api';
import { LanguageModel } from '@model/language-model';
import { signalStore, withState, withMethods } from '@ngrx/signals';
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
            updateState(store, 'Select Language', { language });
        },

        createLanguage(language: LanguageModel) {
            const languages = store.languages();
            const newLanguages = [...languages, language];

            updateState(store, 'Create Language', { languages: newLanguages });
        },

        getLanguages: rxMethod<void>(
            pipe(
                tap(() => {
                    updateState(store, 'Start Loading', { isLoading: true });
                }),
                switchMap(() => {
                    return languageAPI.get$().pipe(
                        tap((languages) => {
                            updateState(store, 'Get Languages', {
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
