import { getAllByLanguageId, getById, insert, update, remove } from '../models/word/word.js';
import { sql } from '../sql.js';

const serverErrorCode = 500;
const applicationErrorCode = 400;
const duplicateEntryValue = 1;

export async function getAllWords(request, response) {
    try {
        response.send(getAllByLanguageId(request.params.languageId));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function getWordById(request, response) {
    try {
        response.send(getById(request.params.id));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function createWord(request, response) {
    try {
        response.send(insert(request.body));
    } catch (error) {
        if (error.message.startsWith(sql.errors.unique)) {
            const duplicateEntry = error.message.split('.')[duplicateEntryValue];
            const errorMessage = `Duplicate entry '${duplicateEntry}'. Update should be used.`;

            response.status(applicationErrorCode).send(errorMessage);

            return;
        }

        response.status(serverErrorCode).send(error);
    }
}

export async function updateWord(request, response) {
    try {
        response.send(update(request.params.id, request.body));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function deleteWord(request, response) {
    try {
        response.send(remove(request.params.id));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}
