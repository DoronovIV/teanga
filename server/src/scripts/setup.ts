/* eslint-disable no-console */
import 'dotenv/config';
import { DatabaseSetupService } from '../app/database/setup/database-setup.service';

async function bootstrap(): Promise<void> {
    const setupService = new DatabaseSetupService();

    await setupService.setup();
    console.log('Setup complete');
    process.exit(0);
}

bootstrap().catch((err) => {
    console.error('Setup failed. ', err);
    process.exit(1);
});
