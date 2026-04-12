import { FastifyReply, FastifyRequest } from 'fastify';
import { getAll, getById, insert, remove, update } from '../models/language/language.js';
import { Language } from '../types/language.js';

export async function getAllLanguages(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    reply.send(getAll());
}

export async function getLanguageById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { id } = params;

    reply.send(getById(id));
}

export async function createLanguage(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const body = request.body as Language;

    reply.send(insert(body));
}

export async function updateLanguage(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { id } = params;
    const body = request.body as Language;

    reply.send(update(id, body));
}

export async function deleteLanguage(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params: any = request.params;
    const { id } = params;

    reply.send(remove(id));
}
