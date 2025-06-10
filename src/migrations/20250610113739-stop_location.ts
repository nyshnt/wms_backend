import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ustop_location20250610113739 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'stop_location',
                columns: [
                    {
                        name: 'stop_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'carrier_move_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                ],
                indices: [
                    {
                        name: 'IDX_stop_location_stop_id',
                        columnNames: ['stop_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'stop_location',
            new TableForeignKey({
                columnNames: ['carrier_move_id'],
                referencedColumnNames: ['carrier_move_id'],
                referencedTableName: 'carrier_move',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('stop_location', 'FK_stop_location_carrier_move_id');
        await queryRunner.dropTable('stop_location');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
