import { getAll, getById, insert, update, remove } from '../models/language/language.js';

const serverErrorCode = 500;

export async function getAllLanguages(request, reply) {
    try {
        reply.send(getAll());
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function getLanguageById(request, reply) {
    try {
        reply.send(getById(request.params.id));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function createLanguage(request, reply) {
    try {
        reply.send(insert(request.body));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function updateLanguage(request, reply) {
    try {
        reply.send(update(request.params.id, request.body));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}

export async function deleteLanguage(request, reply) {
    try {
        reply.send(remove(request.params.id));
    } catch (error) {
        reply.status(serverErrorCode).send(error);
    }
}
