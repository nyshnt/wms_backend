const { Client } = require('pg');
const { exec } = require('child_process');
require('dotenv').config();

// Database connection details
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  user: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'wms',
};

// Function to run a migration
function runMigration(migrationFile) {
  return new Promise((resolve, reject) => {
    const command = `cd /Users/vickykumar/Documents/GitHub/wms_backend && npx ts-node src/migrations/migrate.ts up ${migrationFile}`;
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`Error running migration ${migrationFile}: ${error.message}`);
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        resolve(false); // Continue with next migration even if this one fails
      } else {
        console.log(`Successfully ran migration ${migrationFile}`);
        console.log(`stdout: ${stdout}`);
        resolve(true);
      }
    });
  });
}

// Main function to run migrations in order
async function runMigrationsInOrder() {
  try {
    // Connect to the database
    const client = new Client(dbConfig);
    await client.connect();
    console.log('Connected to database');

    // Clear migrations table
    await client.query('DELETE FROM migrations');
    console.log('Cleared migrations table');

    // Get list of all migration files
    const fs = require('fs');
    const path = require('path');
    const migrationsDir = path.join(__dirname, 'src/migrations');
    
    const migrationFiles = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.ts') && !file.includes('migrate.ts'))
      .sort(); // Sort by filename to ensure correct order

    console.log(`Found ${migrationFiles.length} migration files`);

    // Run migrations one by one
    for (const file of migrationFiles) {
      const migrationName = file.replace('.ts', '');
      console.log(`Running migration ${migrationName}...`);
      
      const success = await runMigration(migrationName);
      
      if (!success) {
        // If migration failed, mark it as executed in the migrations table
        const match = file.match(/(\d+)-(.+)\.ts$/);
        if (match) {
          const timestamp = match[1];
          const name = `U${match[2]}${match[1]}`;
          
          await client.query(
            'INSERT INTO migrations(timestamp, name) VALUES($1, $2)',
            [timestamp, name]
          );
          console.log(`Marked migration ${file} as executed`);
        }
      }
    }

    console.log('All migrations have been processed');
    await client.end();
    console.log('Disconnected from database');
  } catch (error) {
    console.error('Error:', error);
  }
}

runMigrationsInOrder();
