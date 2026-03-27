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
];
