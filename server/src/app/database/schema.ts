import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const languages = sqliteTable('languages', {
    id: int().primaryKey({ autoIncrement: true }),
    created_at: text()
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    iso_name: text().notNull().unique(),
    set_1: text().notNull().unique(),
    set_2: text().notNull().unique(),
    set_3: text().notNull().unique(),
    scope: text().notNull(),
    type: text().notNull(),
    endonyms: text('endonyms', { mode: 'json' }).$type<string[]>().notNull(),
    other_names: text('other_names', { mode: 'json' })
        .$type<string[]>()
        .default(sql`NULL`),
    notes: text('notes', { mode: 'json' })
        .$type<string[]>()
        .default(sql`NULL`),
});

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

export const sentences = sqliteTable('sentences', {
    id: int().primaryKey({ autoIncrement: true }),
    word_id: int().references(() => words.id),
    created_at: text()
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    value: text().notNull(),
    is_checked: int().notNull().default(0),
    is_validated: int().notNull().default(0),
});
