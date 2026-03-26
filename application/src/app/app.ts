import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Sidebar } from './sidebar/sidebar';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [Sidebar, RouterOutlet],
})
export class App {
    protected readonly title = signal('Teanga');
}
