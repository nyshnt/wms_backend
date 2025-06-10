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

        await queryRunner.createForeignKey(
            'production_line_unavailable_schedule',
            new TableForeignKey({
                columnNames: ['unavailable_id'],
                referencedColumnNames: ['unavailable_id'],
                referencedTableName: 'unavailable_schedule_note',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'production_line_unavailable_schedule',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouses',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('production_line_unavailable_schedule', 'FK_production_line_unavailable_schedule_unavailable_id');
        await queryRunner.dropForeignKey('production_line_unavailable_schedule', 'FK_production_line_unavailable_schedule_warehouse_id');
        await queryRunner.dropTable('production_line_unavailable_schedule');
    }
}
