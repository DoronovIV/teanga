import { LanguageModel } from '@model/language-model';

export type AppStateModel = {
    isLoading: boolean;
    languages: LanguageModel[];
    language: LanguageModel | null;
};
