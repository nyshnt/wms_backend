import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClientTable20250609203747 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'clients',
                columns: [
                    {
                        name: 'client_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                ],
                indices: [
                    {
                        name: 'IDX_clients_client_id',
                        columnNames: ['client_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
