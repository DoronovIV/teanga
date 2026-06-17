import { createClient } from '@libsql/client';
import { Injectable, Logger } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { eq } from 'drizzle-orm/sqlite-core/expressions';
import fs from 'fs';
import path from 'path';
import * as schema from '../schema';

const { languages, words } = schema;

const { HOME, CONFIG, DB_FILE_NAME } = process.env;
const fullDbFilePath = `${HOME}${CONFIG}${DB_FILE_NAME}`;

@Injectable()
export class DatabaseSetupService {
    private readonly logger = new Logger(DatabaseSetupService.name);

    public async setup(): Promise<void> {
        if (!fullDbFilePath) {
            throw new Error('DB_FILE_NAME environment variable missing');
        }

        const fullUrl = `file:${fullDbFilePath}`;
        const dbDir = path.dirname(fullDbFilePath);

        if (!fs.existsSync(dbDir)) {
            fs.mkdirSync(dbDir, { recursive: true });
            this.logger.log(`Created directory ${dbDir}`);
        }

        const client = createClient({ url: fullUrl });
        const db = drizzle(client, { schema });

        const result = await client.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='languages';",
        );
        const tableExists = result.rows.length > 0;

        if (!tableExists) {
            this.logger.log('Migrating (tables do not exist)...');
            const migrationsFolder = path.join(process.cwd(), '.drizzle');

            await migrate(db, { migrationsFolder });
            this.logger.log('Migration complete');
        } else {
            this.logger.log('Tables already exist – skipping migration');
        }

        const existing = await db.select().from(languages).limit(1);

        if (!existing.length) {
            this.logger.log('Seeding...');
            await this._seed(db);
            this.logger.log('Seeding complete');
        } else {
            this.logger.log('Already seeded – skipping');
        }

        await client.close();
        this.logger.log('Database setup finished');
    }

    private async _seed(db: any): Promise<void> {
        await db.insert(languages).values([
            {
                iso_name: 'English',
                set_1: 'en',
                set_2: 'eng',
                set_3: 'eng',
                scope: 'Individual',
                type: 'Living',
                endonyms: ['English'],
                other_names: [],
                notes: [],
            },
            {
                iso_name: 'German',
                set_1: 'de',
                set_2: 'deu',
                set_3: 'deu',
                scope: 'Individual',
                type: 'Living',
                endonyms: ['Deutsch'],
                other_names: [],
                notes: [],
            },
        ]);

        const english = await db
            .select()
            .from(languages)
            .where(eq(languages.iso_name, 'English'))
            .limit(1);

        if (english[0]) {
            await db.insert(words).values({
                language_id: english[0].id,
                values: ['##Test'],
                translations: [],
                definitions: [],
                classes: [],
                is_formal: 0,
                lemma: '',
                synonyms: [],
                antonyms: [],
            });
        }
    }
}
