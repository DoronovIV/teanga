import Fastify from 'fastify';

import { config } from './config.js';
import { handleError } from './errors/handle-error.js';
import { routes as languageRoutes } from './routes/language.js';
import { routes as wordRoutes } from './routes/word.js';
import { closeAll } from './service/db.js';
import { init } from './service/setup.js';

const errorExitCode = 1;
const { port } = config;

init();

export const fastify = Fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
                colorize: true,
            },
        },
    },
});

fastify.register(languageRoutes, { prefix: '/api/v1/languages' });
fastify.register(wordRoutes, { prefix: '/api/v1/words' });

fastify.addHook('onClose', async () => {
    closeAll();
});

fastify.setErrorHandler(handleError);

try {
    await fastify.listen({ port });
    fastify.log.info(`Listening on port ${port}.`);
} catch (err) {
    fastify.log.error(err);

    process.exit(errorExitCode);
}
