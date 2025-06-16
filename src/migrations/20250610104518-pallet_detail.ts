import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upallet_detail20250610104518 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableExists = await queryRunner.hasTable('pallet_detail');
        if (tableExists) {
            console.log('Table pallet_detail already exists, skipping creation');
            return;
        }

        try {
            // Enable UUID extension for PostgreSQL
            await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

            await queryRunner.createTable(
                new Table({
                    name: 'pallet_detail',
                    columns: [
                        {
                            name: 'pallet_id',
                            type: 'uuid',
                            isPrimary: true,
                            default: 'uuid_generate_v4()',
                        },
                    ],
                }),
                true,
            );
            console.log('Created pallet_detail table');
        } catch (error) {
            console.error('Error creating table:', error);
            throw error;
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pallet_detail');
    }
}
