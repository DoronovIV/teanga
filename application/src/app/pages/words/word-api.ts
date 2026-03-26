import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from '@model/word';

@Injectable({
    providedIn: 'root',
})
export class WordAPI {
    private readonly _apiUrl = '/api/';
    public words = httpResource<Word[]>(() => ({
        url: `${this._apiUrl}words/`,
        method: 'GET',
    })).value;
}
