import { FastifyInstance } from 'fastify';
import {
    createLanguage,
    deleteLanguage,
    getAllLanguages,
    getLanguageById,
    updateLanguage,
} from '../controllers/language.js';
import { getAllWords } from '../controllers/word.js';

export async function routes(fastify: FastifyInstance): Promise<void> {
    fastify.get('/', getAllLanguages);
    fastify.get('/:id', getLanguageById);
    fastify.get('/:languageId/words', getAllWords);
    fastify.post('/', createLanguage);
    fastify.put('/:id', updateLanguage);
    fastify.delete('/:id', deleteLanguage);
}
