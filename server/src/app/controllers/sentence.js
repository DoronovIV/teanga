import { getById, getAllByWordId, insert, update, remove } from '../models/sentence/sentence';
import { schema } from '../schema.js';

const serverErrorCode = 500;
const applicationErrorCode = 400;
const duplicateEntryValue = 1;

export async function getAllSentences(request, response) {
    try {
        response.send(getAllByWordId(request.params.sentenceId));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function getSentenceById(request, response) {
    try {
        response.send(getById(request.params.id));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function createSentence(request, response) {
    try {
        response.send(insert(request.body));
    } catch (error) {
        if (error.message.startsWith(schema.errors.unique)) {
            const duplicateEntry = error.message.split('.')[duplicateEntryValue];
            const errorMessage = `Duplicate entry '${duplicateEntry}'. Update should be used.`;

            response.status(applicationErrorCode).send(errorMessage);

            return;
        }

        response.status(serverErrorCode).send(error);
    }
}

export async function updateSentence(request, response) {
    try {
        response.send(update(request.params.id, request.body));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function deleteSentence(request, response) {
    try {
        response.send(remove(request.params.id));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}
