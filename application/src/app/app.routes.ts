import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/statistics/statistics').then((module) => module.StatisticsPage),
    },
    {
        path: 'languages',
        loadChildren: () =>
            import('./pages/languages/language.routes').then((module) => module.LanguageRoutes),
    },
    {
        path: 'words',
        loadChildren: () =>
            import('./pages/words/words.routes').then((module) => module.WordsRoutes),
    },
];
