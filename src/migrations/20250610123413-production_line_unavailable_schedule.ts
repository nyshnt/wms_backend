import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uproduction_line_unavailable_schedule20250610123413 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'production_line_unavailable_schedule',
                columns: [
                    {
                        name: 'unavailable_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'production_line',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'begin_date',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'end_date',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'unavailable_reason_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        const unavailableScheduleNoteTable = await queryRunner.getTable('unavailable_schedule_note');
        if (unavailableScheduleNoteTable && unavailableScheduleNoteTable.indices.some(index => index.isUnique && index.columnNames.includes('unavailable_id'))) {
            await queryRunner.createForeignKey(
                'production_line_unavailable_schedule',
                new TableForeignKey({
                    columnNames: ['unavailable_id'],
                    referencedColumnNames: ['unavailable_id'],
                    referencedTableName: 'unavailable_schedule_note',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for unavailable_id as the unavailable_schedule_note table does not have a unique constraint on unavailable_id.');
        }

        const warehousesTableExists = await queryRunner.hasTable('warehouses');
        if (warehousesTableExists) {
            await queryRunner.createForeignKey(
                'production_line_unavailable_schedule',
                new TableForeignKey({
                    columnNames: ['warehouse_id'],
                    referencedColumnNames: ['warehouse_id'],
                    referencedTableName: 'warehouses',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for warehouse_id as the warehouses table does not exist yet.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('production_line_unavailable_schedule');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('production_line_unavailable_schedule', foreignKey);
            }
            await queryRunner.dropTable('production_line_unavailable_schedule');
        }
    }
}
