import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { WordModel } from '@model/word';

@Component({
    selector: 'app-word-form',
    templateUrl: './word.html',
    styleUrl: './word.scss',
    imports: [FormField, RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordForm {
    public wordModel = input.required<WordModel>();
    public buttonLabel = input.required<string>();
    public onFormSubmit = output<WordModel>();
    public formModel = linkedSignal(() => this.wordModel());
    public wordForm = form(this.formModel);

    public onSubmit(): void {
        this.onFormSubmit.emit(this.formModel());
    }
}
