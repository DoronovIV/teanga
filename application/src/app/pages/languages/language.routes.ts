import { Routes } from '@angular/router';

export const LanguageRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./languages').then((module) => module.LanguagesPage),
    },
    {
        path: ':id',
        loadComponent: () => import('./language/language').then((module) => module.LanguagePage),
    },
];
