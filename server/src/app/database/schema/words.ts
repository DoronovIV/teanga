import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { languages } from './languages';

export const words = sqliteTable('words', {
    id: int().primaryKey({ autoIncrement: true }),
    language_id: int().references(() => languages.id),
    created_at: text()
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    values: text('values', { mode: 'json' }).$type<string[]>().notNull(),
    translations: text('translations', { mode: 'json' }).$type<string[]>(),
    definitions: text('definitions', { mode: 'json' }).$type<string[]>(),
    classes: text('classes', { mode: 'json' }).$type<string[]>(),
    is_formal: int().notNull().default(0),
    lemma: text(),
    synonyms: text('synonyms', { mode: 'json' }).$type<string[]>(),
    antonyms: text('antonyms', { mode: 'json' }).$type<string[]>(),
});
