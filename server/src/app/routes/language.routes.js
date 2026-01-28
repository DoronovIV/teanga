import {
    getAllLanguages,
    getLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage,
} from '../controllers/language.controller.js';

export async function routes(fastify) {
    fastify.get('/', getAllLanguages);
    fastify.get('/:id', getLanguageById);
    fastify.post('/', createLanguage);
    fastify.put('/:id', updateLanguage);
    fastify.delete('/:id', deleteLanguage);
}
