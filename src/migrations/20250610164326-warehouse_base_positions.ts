import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwarehouse_base_positions20250610164326 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'warehouse_base_positions',
                columns: [
                    {
                        name: 'basepoint_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'x_coordinate_from_warehouse_baseposition',
                        type: 'float',
                        isNullable: true,
                    },
                    {
                        name: 'y_coordinate_from_warehouse_baseposition',
                        type: 'float',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'warehouse_base_positions',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('warehouse_base_positions', 'FK_warehouse_base_positions_warehouse_id');
        await queryRunner.dropTable('warehouse_base_positions');
    }
}
