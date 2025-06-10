import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Unote_type20250610104912 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'note_type',
                columns: [
                    {
                        name: 'note_type_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'note_type_description',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                ],
                indices: [
                    {
                        name: 'IDX_note_type_id',
                        columnNames: ['note_type_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('note_type');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
