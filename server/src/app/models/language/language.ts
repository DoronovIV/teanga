import { schema } from '../../schema.js';
import { insert as crudInsert, update as crudUpdate } from '../../service/crud.js';
import { dev } from '../../service/db.js';
import { parseFrom, parseTo } from '../../service/parse/language.js';
import { DbLanguage } from '../../types/db-language.js';
import { Language } from '../../types/language.js';

const db = dev().test;

export function getAll(): Language[] {
    return db
        .prepare(schema.languages.selectAll)
        .all()
        .map((language) => {
            return parseFrom(language as DbLanguage);
        });
}

export function getById(id: number | string): Language | null {
    return parseFrom(db.prepare(schema.languages.selectById).get(id) as DbLanguage) ?? null;
}

/** @returns id of the newly created language */
export function insert(language: Language): Language | null {
    const parsedLanguage = parseTo(language);
    const id = crudInsert({
        db,
        tableName: 'languages',
        object: parsedLanguage,
    });

    return getById(id);
}

/** @returns updated language object */
export function update(id: number | string, language: Language): Language | null {
    const parsedLanguage = parseTo(language);

    crudUpdate({
        db,
        tableName: 'languages',
        object: parsedLanguage,
        id,
    });

    return getById(id);
}

export function remove(id: number | string): boolean {
    db.prepare(schema.languages.delete).run(id);

    return true;
}
