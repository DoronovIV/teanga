import { DbWord } from '../../types/db-word.js';
import { Word } from '../../types/word.js';

import {
    transformBooleanFrom,
    transformBooleanTo,
    transformStringFrom,
    transformStringTo,
} from './common.js';

export function parseTo(word: Word): DbWord {
    const { translations, definitions, classes, synonyms, antonyms, is_formal } = word;
    const transformedTranslations = transformStringTo(translations);
    const transformedDefinitions = transformStringTo(definitions);
    const transformedClasses = transformStringTo(classes);
    const transformedSynonyms = transformStringTo(synonyms);
    const transformedAntonyms = transformStringTo(antonyms);
    const transformedIsFormal = transformBooleanTo(is_formal);

    return {
        ...word,
        translations: transformedTranslations,
        definitions: transformedDefinitions,
        is_formal: transformedIsFormal,
        classes: transformedClasses,
        synonyms: transformedSynonyms,
        antonyms: transformedAntonyms,
    };
}

export function parseFrom(word: DbWord): Word {
    const { translations, definitions, classes, synonyms, antonyms, is_formal } = word;
    const transformedTranslations = transformStringFrom(translations);
    const transformedDefinitions = transformStringFrom(definitions);
    const transformedClasses = transformStringFrom(classes);
    const transformedSynonyms = transformStringFrom(synonyms);
    const transformedAntonyms = transformStringFrom(antonyms);
    const transformedIsFormal = transformBooleanFrom(is_formal);

    return {
        ...word,
        translations: transformedTranslations,
        definitions: transformedDefinitions,
        is_formal: transformedIsFormal,
        classes: transformedClasses,
        synonyms: transformedSynonyms,
        antonyms: transformedAntonyms,
    };
}
