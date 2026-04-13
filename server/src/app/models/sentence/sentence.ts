import { schema } from '../../schema.js';
import { insert as crudInsert, update as crudUpdate } from '../../service/crud.js';
import { dev } from '../../service/db.js';
import { parseFrom, parseTo } from '../../service/parse/sentence.js';
import { DbSentence } from '../../types/db-sentence.js';
import { Sentence } from '../../types/sentence.js';

const db = dev().test;

export function getAllByWordId(wordId: number | string): Sentence[] | null {
    return db
        .prepare(schema.sentences.selectAllByWordId)
        .all(wordId)
        .map((sentence) => {
            return parseFrom(sentence as DbSentence);
        });
}

export function getById(id: number | string): Sentence | null {
    return parseFrom(db.prepare(schema.sentences.selectById).get(id) as DbSentence) ?? null;
}

/** @returns id of the newly created sentence */
export function insert(sentence: Sentence): Sentence | null {
    const parsedSentence = parseTo(sentence);

    const id = crudInsert({
        db,
        tableName: 'sentences',
        object: parsedSentence,
    });

    return getById(id);
}

/** @returns updated sentence object */
export function update(id: number | string, sentence: Sentence): Sentence | null {
    const parsedSentence = parseTo(sentence);

    crudUpdate({
        db,
        tableName: 'sentences',
        object: parsedSentence,
        id,
    });

    return getById(id);
}

export function remove(id: number | string): boolean {
    db.prepare(schema.sentences.delete).run(id);

    return true;
}
