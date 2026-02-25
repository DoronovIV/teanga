import { getWordById, createWord, updateWord, deleteWord } from '../controllers/word.js';

export async function routes(fastify) {
    fastify.get('/:id', getWordById);
    fastify.post('/', createWord);
    fastify.put('/:id', updateWord);
    fastify.delete('/:id', deleteWord);
}
