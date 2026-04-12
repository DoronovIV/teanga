import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { errors } from './errors.js';

const serverErrorCode = 500;
const applicationErrorCode = 400;
const duplicateEntryValue = 1;

export function handleError(
    error: FastifyError,
    request: FastifyRequest,
    reply: FastifyReply,
): void {
    if (error.message.startsWith(errors.unique)) {
        const duplicateEntry = error.message.split('.')[duplicateEntryValue];
        const errorMessage = `Duplicate entry '${duplicateEntry}'. Update should be used instead.`;

        reply.status(applicationErrorCode).send(errorMessage);

        return;
    }

    reply.status(serverErrorCode).send(error);
}
