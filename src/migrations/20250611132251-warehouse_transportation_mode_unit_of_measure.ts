import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwarehouse_transportation_mode_unit_of_measure20250611132251 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'warehouse_transportation_mode_unit_of_measure',
                columns: [
                    {
                        name: 'transportation_mode',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'unit_of_measure_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'optimal_dock_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('warehouse_transportation_mode_unit_of_measure',
            new TableForeignKey({
                columnNames: ['transportation_mode'],
                referencedColumnNames: ['transportation_mode'],
                referencedTableName: 'warehouse_transportation_mode',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('warehouse_transportation_mode_unit_of_measure',
            new TableForeignKey({
                columnNames: ['unit_of_measure_code'],
                referencedColumnNames: ['unit_of_measure_code'],
                referencedTableName: 'warehouse_transportation_mode',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('warehouse_transportation_mode_unit_of_measure',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse_transportation_mode',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('warehouse_transportation_mode_unit_of_measure', 'FK_warehouse_transportation_mode_unit_of_measure_transportation_mode');
        await queryRunner.dropForeignKey('warehouse_transportation_mode_unit_of_measure', 'FK_warehouse_transportation_mode_unit_of_measure_unit_of_measure_code');
        await queryRunner.dropForeignKey('warehouse_transportation_mode_unit_of_measure', 'FK_warehouse_transportation_mode_unit_of_measure_warehouse_id');
        await queryRunner.dropTable('warehouse_transportation_mode_unit_of_measure');
    }
}
