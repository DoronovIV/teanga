import { defineConfig } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig([
    {
        plugins: { js },
        extends: ['js/recommended'],
        files: ['**/*.js'],
        ignores: ['**/node_modules/', '**/.angular/', '**/dist/', '**/.git/'],
        rules: {
            'array-callback-return': 'error',
            'arrow-body-style': 'error',
            'default-case': 'error',
            'default-case-last': 'error',
            eqeqeq: 'error',
            'no-empty': 'error',
            'no-inline-comments': 'error',
            'no-unused-vars': 'error',
            'no-debugger': 'error',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-ex-assign': 'error',
            'no-var': 'error',
            'no-unassigned-vars': 'error',
            'prefer-const': 'error',
        },
    },
]);
