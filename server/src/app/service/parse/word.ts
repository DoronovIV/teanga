import { DbWord } from '../../types/db-word.js';
import { Word } from '../../types/word.js';

import {
    transformBooleanFrom,
    transformBooleanTo,
    transformStringFrom,
    transformStringTo,
} from './common.js';

export function parseTo(word: Word): DbWord {
    const {
        forms,
        translations,
        definitions,
        classes,
        lemmas,
        synonyms,
        antonyms,
        is_formal,
        wasted,
    } = word;
    const transformedForms = transformStringTo(forms);
    const transformedTranslations = transformStringTo(translations);
    const transformedDefinitions = transformStringTo(definitions);
    const transformedClasses = transformStringTo(classes);
    const transformedIsFormal = transformBooleanTo(is_formal);
    const transformedWasted = transformBooleanTo(wasted);
    const transformedLemmas = transformStringTo(lemmas);
    const transformedSynonyms = transformStringTo(synonyms);
    const transformedAntonyms = transformStringTo(antonyms);

    return {
        ...word,
        forms: transformedForms,
        translations: transformedTranslations,
        definitions: transformedDefinitions,
        classes: transformedClasses,
        is_formal: transformedIsFormal,
        wasted: transformedWasted,
        lemmas: transformedLemmas,
        synonyms: transformedSynonyms,
        antonyms: transformedAntonyms,
    };
}

export function parseFrom(word: DbWord): Word {
    const {
        forms,
        translations,
        definitions,
        classes,
        lemmas,
        synonyms,
        antonyms,
        is_formal,
        wasted,
    } = word;
    const transformedForms = transformStringFrom(forms);
    const transformedTranslations = transformStringFrom(translations);
    const transformedDefinitions = transformStringFrom(definitions);
    const transformedClasses = transformStringFrom(classes);
    const transformedIsFormal = transformBooleanFrom(is_formal);
    const transformedWasted = transformBooleanFrom(wasted);
    const transformedLemmas = transformStringFrom(lemmas);
    const transformedSynonyms = transformStringFrom(synonyms);
    const transformedAntonyms = transformStringFrom(antonyms);

    return {
        ...word,
        forms: transformedForms,
        translations: transformedTranslations,
        definitions: transformedDefinitions,
        classes: transformedClasses,
        is_formal: transformedIsFormal,
        wasted: transformedWasted,
        lemmas: transformedLemmas,
        synonyms: transformedSynonyms,
        antonyms: transformedAntonyms,
    };
}
