const serverErrorCode = 500;

import { getAll, getById, insert, update, remove } from '../models/language.js';

export async function getAllLanguages(request, response) {
    try {
        response.send(getAll());
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function getLanguageById(request, response) {
    try {
        response.send(getById(request.params.id));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function createLanguage(request, response) {
    try {
        response.send(insert(request.body));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function updateLanguage(request, response) {
    try {
        response.send(update(request.params.id, request.body));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function deleteLanguage(request, response) {
    try {
        response.send(remove(request.params.id));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}
