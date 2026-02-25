import { beforeEach, afterEach, describe, expect, test } from '@jest/globals';

import { closeAll, dev } from './db.js';
import { init } from './setup.js';

const db = dev().setup;

describe('Setup service', () => {
    beforeEach(() => {
        init();
    });

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

    afterEach(() => {
        closeAll();
    });
});

function tableExists(tableName) {
    const result = db.prepare("SELECT sql FROM sqlite_master WHERE type='table'").all();

    return result.some((obj) => {
        return obj.sql.includes(`CREATE TABLE ${tableName}`);
    });
}
