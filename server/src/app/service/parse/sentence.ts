import { DbSentence } from '../../types/db-sentence.js';
import { Sentence } from '../../types/sentence.js';

import { transformBooleanFrom, transformBooleanTo } from './common.js';

export function parseTo(sentence: Sentence): DbSentence {
    const { is_valid } = sentence;
    const transformedIsValidated = transformBooleanTo(is_valid);

    return {
        ...sentence,
        is_valid: transformedIsValidated,
    };
}

export function parseFrom(sentence: DbSentence): Sentence {
    const { is_valid } = sentence;
    const transformedIsValidated = transformBooleanFrom(is_valid);

    return {
        ...sentence,
        is_valid: transformedIsValidated,
    };
}
