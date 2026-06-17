import plugin from '@smarttools/eslint-plugin-rxjs';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from 'eslint/config';

const rxjs = plugin;

export default defineConfig([
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                projectService: true,
                allowAutomaticSingleRunInference: true,
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': typescript,
            import: importPlugin,
            '@smarttools/rxjs': rxjs,
        },
        rules: {
            'max-classes-per-file': ['error', 1],
            'array-callback-return': 'error',
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
            'no-magic-numbers': ['error', { ignore: [0, 1, -1] }],
            'no-return-assign': 'error',
            'no-ternary': 'error',

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
            'no-console': 'error',
            'no-debugger': 'error',
            'no-duplicate-imports': 'error',
            'prefer-const': 'error',
            eqeqeq: 'error',
            // Use import plugin for better import sorting

            // Disable the basic sort-imports rule in favor of import/order
            'sort-imports': 'off',

            /** custom rules */
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    default: {
                        memberTypes: [
                            'public-decorated-field',
                            'public-decorated-set',
                            'public-decorated-get',
                            'public-decorated-method',

                            'public-static-field',
                            'protected-static-field',
                            'private-static-field',

                            'public-instance-field',
                            'protected-instance-field',
                            'private-instance-field',

                            'public-instance-get',
                            'public-instance-set',

                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',

                            'constructor',

                            'public-instance-method',
                            'protected-instance-method',
                            'private-instance-method',
                        ],
                    },
                },
            ],
            'padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: ['const', 'let', 'if'],
                    next: '*',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: ['if'],
                },
                {
                    blankLine: 'always',
                    prev: ['*'],
                    next: ['return', 'break'],
                },
                {
                    blankLine: 'any',
                    prev: ['const', 'let'],
                    next: ['const', 'let'],
                },
            ],

            '@smarttools/rxjs/no-subscribe-handlers': ['error'],
            '@smarttools/rxjs/finnish': [
                'error',
                {
                    names: {
                        '^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
                    },
                    methods: false,
                },
            ],
        },
    },
]);
