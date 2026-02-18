const serverErrorCode = 500;

export async function getAllWords(request, response) {
    try {
        response.send('Not implemented yet');
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function createWord(request, response) {
    try {
        response.send('Not implemented yet');
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function updateWord(request, response) {
    try {
        response.send('Not implemented yet');
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}

export async function deleteWord(request, response) {
    try {
        response.send('Not implemented yet');
    } catch (error) {
        response.status(serverErrorCode).send(error);
    }
}
