const homeDir = process.env.HOME || 'Home variable not found';
const configDir = `${homeDir}/.config/teanga`;
const devConfigDir = `${configDir}/.dev`;

export const config = {
    port: 4210,
    databases: {
        dev: {
            setup: `${devConfigDir}/data/setup.db`,
            test: `${devConfigDir}/data/test.db`,
            main: `${devConfigDir}/data/main.db`,
        },
    },
};
