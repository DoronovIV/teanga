import { FastifyInstance } from 'fastify';
import { getAllSentences } from '../controllers/sentence.js';
import { createWord, deleteWord, getWordById, updateWord } from '../controllers/word.js';

export async function routes(fastify: FastifyInstance): Promise<void> {
    fastify.get('/:id', getWordById);
    fastify.get('/:wordId/sentences', getAllSentences);
    fastify.post('/', createWord);
    fastify.put('/:id', updateWord);
    fastify.delete('/:id', deleteWord);
}
