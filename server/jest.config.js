export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    resolver: './jest.resolver.cjs',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
    },
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
};
