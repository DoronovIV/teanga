import { getAllByLanguageId, getById, insert, update, remove } from '../models/word/word.js';

const serverErrorCode = 500;

export async function getAllWords(request, response) {
    try {
        response.send(getAllByLanguageId(request.params.languageId));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function getWordById(request, response) {
    try {
        response.send(getById(request.params.id));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function createWord(request, response) {
    try {
        response.send(insert(request.body));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function updateWord(request, response) {
    try {
        response.send(update(request.params.id, request.body));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function deleteWord(request, response) {
    try {
        response.send(remove(request.params.id));
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}
