import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import dataSource from '../config/typeorm.config';

// Load environment variables
config();

async function runMigrations() {
    let connection: DataSource | null = null;
    
    try {
        // Initialize the data source
        connection = await dataSource.initialize();
        console.log('Database connection initialized');

        const command = process.argv[2];

        switch (command) {
            case 'up':
                await connection.runMigrations({ transaction: 'each' });
                console.log('All pending migrations have been executed successfully');
                break;

            case 'down':
                await connection.undoLastMigration({ transaction: 'each' });
                console.log('Last migration has been reverted successfully');
                break;

            case 'show':
                const pendingMigrations = await connection.showMigrations();
                console.log('Pending migrations:', pendingMigrations);
                break;

            default:
                console.log('Please specify a valid command: "up", "down", or "show"');
                console.log('Usage: npm run migrate [up|down|show]');
                process.exit(1);
        }

    } catch (error) {
        console.error('Error during migration:', error);
        process.exit(1);
    } finally {
        if (connection) {
            await connection.destroy();
            console.log('Database connection closed');
        }
    }
}

// Only run migrations if this file is being executed directly
if (require.main === module) {
    runMigrations()
        .then(() => {
            console.log('Migration process completed');
            process.exit(0);
        })
        .catch((error) => {
            console.error('Migration process failed:', error);
            process.exit(1);
        });
}
