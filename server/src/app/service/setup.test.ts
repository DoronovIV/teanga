import { describe, expect, test } from '@jest/globals';

import { dev } from './db.ts';
import './setup.ts';

const db = dev();

describe('Setup service', () => {
    test('Should create languages schema', () => {
        const tableName = 'languages';
        const languageTableCreated = tableExists(tableName);

        expect(languageTableCreated).toEqual(true);
    });

    test('Should create words schema', () => {
        const tableName = 'words';
        const wordsTableCreated = tableExists(tableName);

        expect(wordsTableCreated).toEqual(true);
    });
});

function tableExists(tableName: string): boolean {
    const result = db().prepare("SELECT sql FROM sqlite_master WHERE type='table'").all();

    return (
        result?.some((obj: any) => {
            return obj.sql.includes(`CREATE TABLE ${tableName}`);
        }) ?? false
    );
}
