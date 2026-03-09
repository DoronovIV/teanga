import { getAll, getById, insert, update, remove } from '../models/language/language.js';

export async function getAllLanguages(request, reply) {
    reply.send(getAll());
}

export async function getLanguageById(request, reply) {
    reply.send(getById(request.params.id));
}

export async function createLanguage(request, reply) {
    reply.send(insert(request.body));
}

export async function updateLanguage(request, reply) {
    reply.send(update(request.params.id, request.body));
}

export async function deleteLanguage(request, reply) {
    reply.send(remove(request.params.id));
}
