import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwarehouse_transportation_mode20250611131946 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'warehouse_transportation_mode',
                columns: [
                    {
                        name: 'transportation_mode',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'lock_user_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'unit_of_measure_code',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('warehouse_transportation_mode',
            new TableForeignKey({
                columnNames: ['transportation_mode'],
                referencedColumnNames: ['transportation_mode'],
                referencedTableName: 'transportation_mode',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('warehouse_transportation_mode',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'transportation_mode',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('warehouse_transportation_mode',
            new TableForeignKey({
                columnNames: ['unit_of_measure_code'],
                referencedColumnNames: ['unit_of_measure_code'],
                referencedTableName: 'warehouse_unit_of_measure',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('warehouse_transportation_mode', 'FK_warehouse_transportation_mode_transportation_mode');
        await queryRunner.dropForeignKey('warehouse_transportation_mode', 'FK_warehouse_transportation_mode_warehouse_id');
        await queryRunner.dropForeignKey('warehouse_transportation_mode', 'FK_warehouse_transportation_mode_unit_of_measure_code');
        await queryRunner.dropTable('warehouse_transportation_mode');
    }
}
