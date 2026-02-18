import { getAllWords, createWord, updateWord, deleteWord } from '../controllers/word.js';

export async function routes(fastify) {
    fastify.get('/:languageId', getAllWords);
    fastify.post('/:languageId', createWord);
    fastify.put('/:languageId/:wordId', updateWord);
    fastify.delete('/:languageId/:wordId', deleteWord);
}
