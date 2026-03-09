import { errors } from '../errors/errors.js';
import { getById, getAllByWordId, insert, update, remove } from '../models/sentence/sentence';

const serverErrorCode = 500;
const applicationErrorCode = 400;
const duplicateEntryValue = 1;

export async function getAllSentences(request, reply) {
    try {
        reply.send(getAllByWordId(request.params.sentenceId));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function getSentenceById(request, reply) {
    try {
        reply.send(getById(request.params.id));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function createSentence(request, reply) {
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

export async function updateSentence(request, reply) {
    try {
        reply.send(update(request.params.id, request.body));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function deleteSentence(request, reply) {
    try {
        reply.send(remove(request.params.id));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}
