import { schema } from '../../schema.js';
import { insert as crudInsert, update as crudUpdate } from '../../service/crud.js';
import { dev } from '../../service/db.js';

const db = dev().test;

export function getAllByLanguageId(languageId) {
    return db.prepare(schema.words.selectAllByLanguageId).all(languageId) ?? null;
}

export function getById(id) {
    return db.prepare(schema.words.selectById).get(id) ?? null;
}

/** @returns id of the newly created word */
export function insert(word) {
    const id = crudInsert({
        db,
        tableName: 'words',
        object: word,
    });

    return getById(id);
}

/** @returns updated word object */
export function update(id, word) {
    crudUpdate({
        db,
        tableName: 'words',
        object: word,
        id,
    });

    return getById(id);
}

export function remove(id) {
    db.prepare(schema.words.delete).run(id);

    return true;
}
