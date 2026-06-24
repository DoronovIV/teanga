const homeDir = process.env.HOME || 'Home variable not found';
const configDir = `${homeDir}/.config/teanga`;
const dataConfigDir = `${configDir}/data`;

export const config = {
    port: 4210,
    databases: {
        dev: `${dataConfigDir}/dev.db`,
    },
    disposableTestDataPrefix: '__',
    reusableTestDataPrefix: '##',
};
