import { Routes } from '@angular/router';

export const LanguageRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./languages').then((module) => module.LanguagesPage),
    },
    {
        path: 'create',
        loadComponent: () =>
            import('./language/create/create-language').then((module) => module.CreateLanguagePage),
    },
    {
        path: 'update',
        loadComponent: () =>
            import('./language/update/update-language').then((module) => module.UpdateLanguagePage),
    },
    {
        path: ':id',
        loadComponent: () => import('./language/language').then((module) => module.LanguagePage),
    },
];
