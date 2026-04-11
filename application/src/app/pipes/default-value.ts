import { Pipe } from '@angular/core';

const defaultValue = 'N/A';

@Pipe({
    name: 'defaultValue',
    standalone: true,
})
export class DefaultValue {
    public transform(value: string | any[] | null | undefined): string | void {
        if (!value || !value.length) {
            return defaultValue;
        }

        if (!Array.isArray(value)) {
            return value;
        }
    }
}
