import { schema } from '../../schema.js';
import { insert as crudInsert, update as crudUpdate } from '../../service/crud.js';
import { dev } from '../../service/db.js';
import { parseFrom, parseTo } from '../../service/parse/word.js';
import { DbWord } from '../../types/db-word.js';
import { Word } from '../../types/word.js';

const db = dev();

export function getAll(): Word[] {
    return db()
        .prepare(schema.words.selectAll)
        .all()
        .map((word) => {
            return parseFrom(word as DbWord);
        });
}

export function getAllByLanguageId(languageId: number | string): Word[] | null {
    return db()
        .prepare(schema.words.selectAllByLanguageId)
        .all(languageId)
        .map((word) => {
            return parseFrom(word as DbWord);
        });
}

export function getById(id: number | string): Word | null {
    const word = (db().prepare(schema.words.selectById).get(id) as DbWord) ?? null;

    if (!word) {
        return word;
    }

    return parseFrom(word);
}

/** @returns id of the newly created word */
export function insert(word: Word): Word | null {
    const parsedWord = parseTo(word);

    const id = crudInsert({
        db: db(),
        tableName: 'words',
        object: parsedWord,
    });

    return getById(id);
}

/** @returns updated word object */
export function update(id: number | string, word: Word): Word | null {
    const parsedWord = parseTo(word);

    crudUpdate({
        db: db(),
        tableName: 'words',
        object: parsedWord,
        id,
    });

    return getById(id);
}

export function remove(id: number | string): boolean {
    const { changes } = db().prepare(schema.words.delete).run(id);

    return changes > 0;
}
