import { FastifyInstance } from 'fastify';
import {
    createSentence,
    deleteSentence,
    getSentenceById,
    updateSentence,
} from '../controllers/sentence.js';

export async function routes(fastify: FastifyInstance): Promise<void> {
    fastify.get('/:id', getSentenceById);
    fastify.post('/', createSentence);
    fastify.put('/:id', updateSentence);
    fastify.delete('/:id', deleteSentence);
}
