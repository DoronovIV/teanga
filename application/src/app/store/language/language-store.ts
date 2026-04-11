import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { LanguageAPI } from '@api/language-api';
import { LanguageModel } from '@model/language';
import { signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, of, pipe, switchMap, tap } from 'rxjs';

import { LanguageStateModel } from './state-model';

const initialState: LanguageStateModel = {
    languages: [],
    language: null,
};

export const LanguageStore = signalStore(
    { providedIn: 'root' },

    withDevtools('language'),

    withState(initialState),

    withMethods((store, languageAPI = inject(LanguageAPI)) => ({
        selectLanguage(language: LanguageModel | null) {
            updateState(store, '[Language] Select Language', { language });
        },

        createLanguage: rxMethod<LanguageModel>(
            pipe(
                switchMap((language) => {
                    return languageAPI.create$(language).pipe(
                        tap((newLanguage) => {
                            const languages = store.languages();
                            const newLanguages = [...languages, newLanguage];

                            updateState(store, '[Language] Create Language', {
                                languages: newLanguages,
                            });
                        }),
                    );
                }),
            ),
        ),

        updateLanguage: rxMethod<LanguageModel>(
            pipe(
                switchMap((language) => {
                    return languageAPI.update$(language).pipe(
                        tap((updatedLanguage) => {
                            const languages = [...store.languages()];
                            const index = languages.findIndex((language) => {
                                return language.id === updatedLanguage.id;
                            });

                            languages[index] = updatedLanguage;

                            updateState(store, '[Language] Update Language', {
                                languages,
                                language: updatedLanguage,
                            });
                        }),
                    );
                }),
            ),
        ),

        deleteLanguage: rxMethod<number>(
            pipe(
                switchMap((languageId) => {
                    return languageAPI.delete$(languageId).pipe(
                        tap((result) => {
                            if (!result) {
                                return;
                            }

                            const languages = [...store.languages()];

                            const languageIndex = languages.findIndex((language) => {
                                return language.id === languageId;
                            });

                            if (languageIndex === -1) {
                                return;
                            }

                            languages.splice(languageIndex, 1);

                            updateState(store, '[Language] Delete Language', {
                                languages,
                            });
                        }),
                    );
                }),
            ),
        ),

        getLanguages: rxMethod<void>(
            pipe(
                switchMap(() => {
                    return languageAPI.get$().pipe(
                        tap((languages) => {
                            updateState(store, '[Language] Get Languages', {
                                languages,
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
