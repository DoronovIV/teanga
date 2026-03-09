import { schema } from '../../schema.js';
import { insert as crudInsert, update as crudUpdate } from '../../service/crud.js';
import { dev } from '../../service/db.js';

const db = dev().test;

export function getAll() {
    return db.prepare(schema.languages.selectAll).all();
}

export function getById(id) {
    return db.prepare(schema.languages.selectById).get(id) ?? null;
}

/** @returns id of the newly created language */
export function insert(language) {
    const id = crudInsert({
        db,
        tableName: 'languages',
        object: language,
    });

    return getById(id);
}

/** @returns updated language object */
export function update(id, language) {
    crudUpdate({
        db,
        tableName: 'languages',
        object: language,
        id,
    });

    return getById(id);
}

export function remove(id) {
    db.prepare(schema.languages.delete).run(id);

    return true;
}
