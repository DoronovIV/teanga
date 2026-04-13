import { DbSentence } from '../../types/db-sentence.js';
import { Sentence } from '../../types/sentence.js';

import { transformBooleanFrom, transformBooleanTo } from './common.js';

export function parseTo(sentence: Sentence): DbSentence {
    const { is_validated } = sentence;
    const transformedIsValidated = transformBooleanTo(is_validated);

    return {
        ...sentence,
        is_validated: transformedIsValidated,
    };
}

export function parseFrom(sentence: DbSentence): Sentence {
    const { is_validated } = sentence;
    const transformedIsValidated = transformBooleanFrom(is_validated);

    return {
        ...sentence,
        is_validated: transformedIsValidated,
    };
}
