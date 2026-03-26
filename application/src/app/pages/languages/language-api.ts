import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Language } from '@model/language';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LanguageAPI {
    private readonly _apiUrl = '/api/languages';
    private readonly _httpClient = inject(HttpClient);

    public get$(): Observable<Language[]> {
        return this._httpClient.get<Language[]>(this._apiUrl);
    }
}
