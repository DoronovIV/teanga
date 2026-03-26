import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LanguageModel } from '@model/language-model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LanguageAPI {
    private readonly _apiUrl = '/api/languages';
    private readonly _httpClient = inject(HttpClient);

    public get$(): Observable<LanguageModel[]> {
        return this._httpClient.get<LanguageModel[]>(this._apiUrl);
    }

    public getById$(languageId: string): Observable<LanguageModel> {
        return this._httpClient.get<LanguageModel>(`${this._apiUrl}/${languageId}`);
    }
}
