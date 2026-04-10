import { Routes } from '@angular/router';

export const WordsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./words').then((module) => module.WordsPage),
    },
    {
        path: ':id',
        loadComponent: () => import('./word/word').then((module) => module.WordPage),
    },
    {
        path: 'create',
        loadComponent: () =>
            import('./word/create/create-word').then((module) => module.CreateWordPage),
    },
    {
        path: 'update/:id',
        loadComponent: () =>
            import('./word/update/update-word').then((module) => module.UpdateWordPage),
    },
];
