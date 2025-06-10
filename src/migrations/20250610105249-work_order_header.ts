import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwork_order_header20250610105249 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'wkohdr',
                columns: [
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'work_order_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'work_order_revision',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'exclusion_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'start_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'production_line',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'schedule_begin_date',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'auto_release_pick_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'auto_release_pick_time',
                        type: 'time',
                        isNullable: true,
                    },
                    {
                        name: 'goal_time',
                        type: 'time',
                        isNullable: true,
                    },
                    {
                        name: 'duration_time',
                        type: 'time',
                        isNullable: true,
                    },
                    {
                        name: 'plan_sequence',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'customs_consignment_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                ],
                indices: [
                    {
                        name: 'IDX_work_order_number',
                        columnNames: ['work_order_number'],
                        isUnique: true,
                    },
                    {
                        name: 'IDX_work_order_revision',
                        columnNames: ['work_order_revision'],
                        isUnique: true,
                    },
                    {
                        name: 'IDX_work_order_client_id',
                        columnNames: ['client_id'],
                        isUnique: true,
                    },
                    {
                        name: 'IDX_work_order_warehouse_id',
                        columnNames: ['warehouse_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'wkohdr',
            new TableForeignKey({
                columnNames: ['customs_consignment_id'],
                referencedColumnNames: ['customs_consignment_id'],
                referencedTableName: 'customs_consignment',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wkohdr', 'FK_wkohdr_customs_consignment_id');
        await queryRunner.dropTable('wkohdr');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
