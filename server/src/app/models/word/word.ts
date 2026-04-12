import { schema } from '../../schema.js';
import { insert as crudInsert, update as crudUpdate } from '../../service/crud.js';
import { dev } from '../../service/db.js';
import { Word } from '../../types/word.js';

const db = dev().test;

export function getAllByLanguageId(languageId: number | string): Word[] | null {
    return (db.prepare(schema.words.selectAllByLanguageId).all(languageId) as Word[]) ?? null;
}

export function getById(id: number | string): Word | null {
    return (db.prepare(schema.words.selectById).get(id) as Word) ?? null;
}

/** @returns id of the newly created word */
export function insert(word: Word): Word | null {
    const id = crudInsert({
        db,
        tableName: 'words',
        object: word,
    });

    return getById(id);
}

/** @returns updated word object */
export function update(id: number | string, word: Word): Word | null {
    crudUpdate({
        db,
        tableName: 'words',
        object: word,
        id,
    });

    return getById(id);
}

export function remove(id: number | string): boolean {
    db.prepare(schema.words.delete).run(id);

    return true;
}
