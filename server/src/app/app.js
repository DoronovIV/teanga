import Fastify from 'fastify';
import { config } from './config.js';

const { port } = config;

const fastify = Fastify({
    logger: true,
});

fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' });
});

fastify.listen({ port }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
