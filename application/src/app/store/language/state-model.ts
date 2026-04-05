import { LanguageModel } from '@model/language-model';

export type LanguageStateModel = {
    languages: LanguageModel[];
    language: LanguageModel | null;
};
