import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';
import { form, FormField, minLength, pattern, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { LanguageModel } from '@model/language';

const minNameLength = 5;

@Component({
    selector: 'app-language-form',
    templateUrl: './language.html',
    styleUrl: './language.scss',
    imports: [FormField, RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageForm {
    public languageModel = input.required<LanguageModel>();
    public buttonLabel = input.required<string>();
    public onFormSubmit = output<LanguageModel>();
    public formModel = linkedSignal(() => this.languageModel());
    public languageForm = form(this.formModel, (schemaPath) => {
        minLength(schemaPath.iso_name, minNameLength, { message: 'Iso name is required' });

        required(schemaPath.set_1, { message: 'Set 1 is required' });
        pattern(schemaPath.set_1, /^[a-z]{2}$/, { message: 'Set 1 is invalid' });

        required(schemaPath.set_2, { message: 'Set 2 is required' });
        pattern(schemaPath.set_2, /^[a-z]{3}$/, { message: 'Set 2 is invalid' });

        required(schemaPath.set_3, { message: 'Set 3 is required' });
        pattern(schemaPath.set_3, /^[a-z]{3}$/, { message: 'Set 3 is invalid' });

        required(schemaPath.scope, { message: 'Scope is required' });

        required(schemaPath.type, { message: 'Type is required' });

        required(schemaPath.endonyms, { message: 'Endonyms are required' });
    });

    public onSubmit(): void {
        this.onFormSubmit.emit(this.formModel());
    }
}
