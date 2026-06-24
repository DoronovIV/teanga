import { FastifyReply, FastifyRequest } from 'fastify';
import { getAllByLanguageId, getById, insert, remove, update } from '../models/word/word.js';
import { Word } from '../types/word.js';

export async function getAllWords(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { languageId } = params;

    reply.send(getAllByLanguageId(languageId));
}

export async function getWordById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { id } = params;

    reply.send(getById(id));
}

export async function createWord(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const body = request.body as Word;

    reply.send(insert(body));
}

export async function updateWord(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { id } = params;
    const body = request.body as Word;

    reply.send(update(id, body));
}

export async function deleteWord(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { id } = params;

    reply.send(remove(id));
}
