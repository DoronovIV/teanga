import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeIcon } from '@icons/theme/theme';
import { AppStore } from '@store/app-store';
import { LanguageStore } from '@store/language/language-store';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, ThemeIcon],
})
export class Sidebar {
    public readonly language = inject(LanguageStore).language;
    public readonly theme = inject(AppStore).theme;
    private readonly _appStore = inject(AppStore);

    public toggleTheme(): void {
        const theme = this._appStore.theme();

        if (theme === 'light') {
            this._appStore.setTheme('dark');

            return;
        }

        this._appStore.setTheme('light');
    }
}
