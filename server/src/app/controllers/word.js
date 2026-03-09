import { getAllByLanguageId, getById, insert, update, remove } from '../models/word/word.js';

export async function getAllWords(request, reply) {
    reply.send(getAllByLanguageId(request.params.languageId));
}

export async function getWordById(request, reply) {
    reply.send(getById(request.params.id));
}

export async function createWord(request, reply) {
    reply.send(insert(request.body));
}

export async function updateWord(request, reply) {
    reply.send(update(request.params.id, request.body));
}

export async function deleteWord(request, reply) {
    reply.send(remove(request.params.id));
}
