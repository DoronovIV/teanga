import { schema } from '../../schema.js';
import { insert as crudInsert, update as crudUpdate } from '../../service/crud.js';
import { dev } from '../../service/db.js';
import { Sentence } from '../../types/sentence.js';

const db = dev().test;

export function getAllByWordId(wordId: number | string): Sentence[] | null {
    return (db.prepare(schema.sentences.selectAllByWordId).all(wordId) as Sentence[]) ?? null;
}

export function getById(id: number | string): Sentence | null {
    return (db.prepare(schema.sentences.selectById).get(id) as Sentence) ?? null;
}

/** @returns id of the newly created sentence */
export function insert(sentence: Sentence): Sentence | null {
    const id = crudInsert({
        db,
        tableName: 'sentences',
        object: sentence,
    });

    return getById(id);
}

/** @returns updated sentence object */
export function update(id: number | string, sentence: Sentence): Sentence | null {
    crudUpdate({
        db,
        tableName: 'sentences',
        object: sentence,
        id,
    });

    return getById(id);
}

export function remove(id: number | string): boolean {
    db.prepare(schema.sentences.delete).run(id);

    return true;
}
