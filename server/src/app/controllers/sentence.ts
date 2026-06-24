import { FastifyReply, FastifyRequest } from 'fastify';
import { getAllByWordId, getById, insert, remove, update } from '../models/sentence/sentence.js';
import { Sentence } from '../types/sentence.js';

export async function getAllSentences(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { sentenceId } = params;

    reply.send(getAllByWordId(sentenceId));
}

export async function getSentenceById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { id } = params;

    reply.send(getById(id));
}

export async function createSentence(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const body = request.body as Sentence;

    reply.send(insert(body));
}

export async function updateSentence(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { id } = params;
    const body = request.body as Sentence;

    reply.send(update(id, body));
}

export async function deleteSentence(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { id } = params;

    reply.send(remove(id));
}
