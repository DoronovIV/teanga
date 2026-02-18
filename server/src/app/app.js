import Fastify from 'fastify';

import { config } from './config.js';
import { routes as languageRoutes } from './routes/language.js';
import { routes as wordRoutes } from './routes/word.js';
import { closeAll } from './service/db.js';

const errorExitCode = 1;
const { port } = config;

const fastify = Fastify({
    logger: true,
});

fastify.register(languageRoutes, { prefix: '/api/v1/languages' });
fastify.register(wordRoutes, { prefix: '/api/v1/words' });

fastify.addHook('onClose', async (instance, done) => {
    closeAll();
    done();
});

fastify.listen({ port }, async (err) => {
    if (err) {
        fastify.log.error(err);

        // eslint-disable-next-line no-undef
        process.exit(errorExitCode);
    }
});
