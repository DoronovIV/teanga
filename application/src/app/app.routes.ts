import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/statistics/statistics').then((module) => module.StatisticsPage),
    },
    {
        path: 'languages',
        loadComponent: () =>
            import('./pages/languages/languages').then((module) => module.LanguagesPage),
    },
    {
        path: 'words',
        loadComponent: () => import('./pages/words/words').then((module) => module.WordsPage),
    },
];
