import { schema } from '../../schema.js';
import { insert as crudInsert, update as crudUpdate } from '../../service/crud.js';
import { dev } from '../../service/db.js';

const db = dev().test;

export function getAllByWordId(wordId) {
    return db.prepare(schema.sentences.selectAllByWordId).all(wordId) ?? null;
}

export function getById(id) {
    return db.prepare(schema.sentences.selectById).get(id) ?? null;
}

/**
 * @param {Sentence} sentence
 * @returns id of the newly created sentence
 * */
export function insert(sentence) {
    const id = crudInsert({
        db,
        tableName: 'sentences',
        object: sentence,
    });

    return getById(id);
}

/**
 * @param {Sentence} sentence
 * @returns updated sentence object
 * */
export function update(id, sentence) {
    crudUpdate({
        db,
        tableName: 'sentences',
        object: sentence,
        id,
    });

    return getById(id);
}

export function remove(id) {
    db.prepare(schema.sentences.delete).run(id);

    return true;
}
