import { Injectable, effect, inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { AppStore } from '@store/app-store';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly _document = inject(DOCUMENT);
    private readonly _theme = inject(AppStore).theme;

    constructor() {
        effect(() => {
            const { body } = this._document;

            body.classList = '';
            body.classList.add(`${this._theme()}-theme`);
        });
    }
}
