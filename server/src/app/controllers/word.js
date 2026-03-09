import { errors } from '../errors/errors.js';
import { getAllByLanguageId, getById, insert, update, remove } from '../models/word/word.js';

const serverErrorCode = 500;
const applicationErrorCode = 400;
const duplicateEntryValue = 1;

export async function getAllWords(request, reply) {
    try {
        reply.send(getAllByLanguageId(request.params.languageId));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function getWordById(request, reply) {
    try {
        reply.send(getById(request.params.id));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function createWord(request, reply) {
    try {
        reply.send(insert(request.body));
    } catch (error) {
        if (error.message.startsWith(errors.unique)) {
            const duplicateEntry = error.message.split('.')[duplicateEntryValue];
            const errorMessage = `Duplicate entry '${duplicateEntry}'. Update should be used.`;

            reply.status(applicationErrorCode).send(errorMessage);

            return;
        }

        reply.status(serverErrorCode).send(error);
    }
}

export async function updateWord(request, reply) {
    try {
        reply.send(update(request.params.id, request.body));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function deleteWord(request, reply) {
    try {
        reply.send(remove(request.params.id));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}
