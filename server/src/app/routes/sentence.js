export async function routes(fastify) {
    fastify.get('/:id');
    fastify.post('/');
    fastify.put('/:id');
    fastify.delete('/:id');
}
