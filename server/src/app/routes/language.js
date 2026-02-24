import {
    getAllLanguages,
    getLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage,
} from '../controllers/language.js';
import { getAllWords } from '../controllers/word.js';

export async function routes(fastify) {
    fastify.get('/', getAllLanguages);
    fastify.get('/:id', getLanguageById);
    fastify.get('/:languageId/words', getAllWords);
    fastify.post('/', createLanguage);
    fastify.put('/:id', updateLanguage);
    fastify.delete('/:id', deleteLanguage);
}
