import { getById, getAllByWordId, insert, update, remove } from '../models/sentence/sentence.js';

export async function getAllSentences(request, reply) {
    reply.send(getAllByWordId(request.params.sentenceId));
}

export async function getSentenceById(request, reply) {
    reply.send(getById(request.params.id));
}

export async function createSentence(request, reply) {
    reply.send(insert(request.body));
}

export async function updateSentence(request, reply) {
    reply.send(update(request.params.id, request.body));
}

export async function deleteSentence(request, reply) {
    reply.send(remove(request.params.id));
}
