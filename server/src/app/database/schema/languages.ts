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
