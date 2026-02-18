// eslint-disable-next-line no-undef
const homeDir = process.env.HOME || 'Home variable not found';
const configDir = `${homeDir}/.config/teanga`;
const devConfigDir = `${configDir}/.dev/.data`;

export const config = {
    port: 4210,
    databases: {
        dev: {
            setup: `${devConfigDir}/setup.db`,
            test: `${devConfigDir}/test.db`,
            main: `${devConfigDir}/main.db`,
        },
    },
};
