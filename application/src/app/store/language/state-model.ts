import { LanguageModel } from '@model/language';

export type LanguageStateModel = {
    languages: LanguageModel[];
    language: LanguageModel | null;
};
