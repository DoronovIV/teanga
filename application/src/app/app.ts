import { Component, signal } from '@angular/core';

import { Sidebar } from './sidebar/sidebar';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [Sidebar],
})
export class App {
    protected readonly title = signal('application');
}
