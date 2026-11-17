import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { WordModel } from '@model/word';
import { LanguageStore } from '@store/language/language-store';
import { WordStore } from '@store/word/word-store';

@Component({
    selector: 'app-create-word-page',
    templateUrl: './create-word.html',
    styleUrl: './create-word.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateWordPage implements OnInit {
    public wordModel = signal<WordModel>({
        created_at: '',
        value: '',
        translations: [],
        definitions: [],
        classes: [],
        is_formal: false,
        infinitive: '',
        synonyms: [],
        antonyms: [],
    });

    public wordForm = form(this.wordModel);
    private readonly _language = inject(LanguageStore).language;
    private readonly _wordStore = inject(WordStore);

    public ngOnInit(): void {
        this._setLanguageId();
    }

    public create(formOutput: WordModel): void {
        this._wordStore.createWord(formOutput);
    }

    private _setLanguageId(): void {
        this.wordModel.update((model) => ({
            ...model,
            language_id: this._language()?.id,
        }));
    }
}
