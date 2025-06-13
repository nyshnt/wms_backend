import { MigrationInterface, QueryRunner, Table } from 'typeorm';

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
                    },
                    {
                        name: 'IDX_work_order_revision',
                        columnNames: ['work_order_revision'],
                    },
                    {
                        name: 'IDX_work_order_client_id',
                        columnNames: ['client_id'],
                    },
                    {
                        name: 'IDX_work_order_warehouse_id',
                        columnNames: ['warehouse_id'],
                    },
                ],
            }),
            true,
        );

        // Skip foreign key creation since the customs_consignment table doesn't exist yet
        // We'll need to create this foreign key in a separate migration after the customs_consignment table is created
        console.log('Skipping foreign key creation for customs_consignment_id as the referenced table does not exist yet.');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the foreign key if it exists
        const table = await queryRunner.getTable('wkohdr');
        const foreignKey = table?.foreignKeys.find(fk => 
            fk.columnNames.indexOf('customs_consignment_id') !== -1
        );
        if (foreignKey) {
            await queryRunner.dropForeignKey('wkohdr', foreignKey);
        }

        await queryRunner.dropTable('wkohdr');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
