import Fastify from 'fastify';

import { config } from './config.js';
import { handleError } from './errors/handle-error.js';
import { routes as languageRoutes } from './routes/language.js';
import { routes as wordRoutes } from './routes/word.js';
import { closeAll } from './service/db.js';
import { init } from './service/setup.js';

init();

const errorExitCode = 1;
const { port } = config;

export const fastify = Fastify({
    logger: true,
});

fastify.register(languageRoutes, { prefix: '/api/v1/languages' });
fastify.register(wordRoutes, { prefix: '/api/v1/words' });

fastify.addHook('onClose', async (instance, done) => {
    closeAll();
    done();
});

fastify.setErrorHandler(handleError);

fastify.listen({ port }, (err) => {
    if (err) {
        fastify.log.error(err);

        // eslint-disable-next-line no-undef
        process.exit(errorExitCode);
    }
});
