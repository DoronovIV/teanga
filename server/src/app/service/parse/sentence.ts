import { DbSentence } from '../../types/db-sentence.js';
import { Sentence } from '../../types/sentence.js';

import { transformBooleanFrom, transformBooleanTo } from './common.js';

export function parseTo(sentence: Sentence): DbSentence {
    const { is_valid, wasted } = sentence;
    const transformedIsValidated = transformBooleanTo(is_valid);
    const transformedWasted = transformBooleanTo(wasted);

    return {
        ...sentence,
        is_valid: transformedIsValidated,
        wasted: transformedWasted,
    };
}

export function parseFrom(sentence: DbSentence): Sentence {
    const { is_valid, wasted } = sentence;
    const transformedIsValidated = transformBooleanFrom(is_valid);
    const transformedWasted = transformBooleanFrom(wasted);

    return {
        ...sentence,
        is_valid: transformedIsValidated,
        wasted: transformedWasted,
    };
}
