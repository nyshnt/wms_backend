import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ustorage_zone20250610114450 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        // Check if the storage_zone table already exists
        const tableExists = await queryRunner.hasTable('storage_zone');
        if (!tableExists) {
            await queryRunner.createTable(
                new Table({
                    name: 'storage_zone',
                    columns: [
                        {
                            name: 'storage_zone_id',
                            type: 'uuid',
                            isPrimary: true,
                            default: 'uuid_generate_v4()',
                        },
                    ],
                }),
                true,
            );
        } else {
            console.log('Skipping table creation as the storage_zone table already exists.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('storage_zone');
        if (tableExists) {
            await queryRunner.dropTable('storage_zone');
        }
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
