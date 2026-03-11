// eslint-disable-next-line no-undef
const homeDir = process.env.HOME || 'Home variable not found';
const configDir = `${homeDir}/.config/teanga`;
const devConfigDir = `${configDir}/.dev/.data`;

export const config = {
    databases: {
        dev: {
            test: `${devConfigDir}/test.db`,
            main: `${devConfigDir}/main.db`,
        },
    },
    model: 'deepseek-r1:8b',
    port: 4210,
};
