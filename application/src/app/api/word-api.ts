import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WordModel } from '@model/word-model';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WordAPI {
    private readonly _apiUrl = '/api/words';
    private readonly _httpClient = inject(HttpClient);

    public getById$(wordId: string | number | null): Observable<WordModel> {
        if (!wordId || isNaN(+wordId)) {
            return EMPTY;
        }

        return this._httpClient.get<WordModel>(`${this._apiUrl}/${wordId}`);
    }
}
