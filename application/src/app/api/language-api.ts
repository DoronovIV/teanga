import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LanguageModel } from '@model/language';
import { WordModel } from '@model/word';
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

    public getById$(languageId: number): Observable<LanguageModel> {
        return this._httpClient.get<LanguageModel>(`${this._apiUrl}/${languageId}`);
    }

    public getWords$(languageId: number): Observable<WordModel[]> {
        return this._httpClient.get<WordModel[]>(`${this._apiUrl}/${languageId}/words`);
    }

    public create$(language: LanguageModel): Observable<LanguageModel> {
        return this._httpClient.post<LanguageModel>(`${this._apiUrl}`, language);
    }

    public update$(language: LanguageModel): Observable<LanguageModel> {
        return this._httpClient.put<LanguageModel>(`${this._apiUrl}/${language.id}`, language);
    }

    public delete$(languageId: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${this._apiUrl}/${languageId}`);
    }
}
