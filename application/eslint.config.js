import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
    // JavaScript files configuration
    {
        plugins: { js, import: importPlugin },
        extends: ['js/recommended'],
        files: ['**/*.js'],
        ignores: ['**/node_modules/', '**/.angular/', '**/dist/', '**/.git/'],
        rules: {
            'array-callback-return': 'error',
            'default-case': 'error',
            'default-case-last': 'error',
            eqeqeq: 'error',
            'no-empty': 'error',
            'no-inline-comments': 'error',
            'no-undef': 'error',
            'no-unused-vars': 'error',
            'no-debugger': 'error',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-ex-assign': 'error',
            'no-var': 'error',
            'no-unassigned-vars': 'error',
            'prefer-const': 'error',
            'no-magic-numbers': ['error', { ignore: [0, 1] }],
            'no-return-assign': 'error',
            'no-ternary': 'error',

            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: false,
                    },
                },
            ],
        },
    },

    // TypeScript files configuration
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': typescript,
            '@angular-eslint': angular,
            import: importPlugin,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                },
            ],
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'explicit',
                    overrides: {
                        constructors: 'no-public',
                    },
                },
            ],
            '@typescript-eslint/no-empty-function': [
                'error',
                {
                    allow: ['arrowFunctions', 'functions', 'methods'],
                },
            ],
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-duplicate-imports': 'error',
            'prefer-const': 'error',
            eqeqeq: 'error',
            // Use import plugin for better import sorting
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            // Disable the basic sort-imports rule in favor of import/order
            'sort-imports': 'off',
        },
    },

    // Angular template files configuration
    {
        files: ['**/*.html'],
        languageOptions: {
            parser: angularTemplateParser,
            ecmaVersion: 'latest',
        },
        plugins: {
            '@angular-eslint/template': angularTemplate,
        },
        rules: {
            '@angular-eslint/template/no-duplicate-attributes': 'error',
            '@angular-eslint/template/no-negated-async': 'error',
            '@angular-eslint/template/eqeqeq': 'error',
        },
    },
]);
