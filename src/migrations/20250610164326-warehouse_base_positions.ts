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

        const warehouseTableExists = await queryRunner.hasTable('warehouse');
        if (warehouseTableExists) {
            await queryRunner.createForeignKey(
                'warehouse_base_positions',
                new TableForeignKey({
                    columnNames: ['warehouse_id'],
                    referencedColumnNames: ['warehouse_id'],
                    referencedTableName: 'warehouse',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for warehouse_id as the warehouse table does not exist yet.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('warehouse_base_positions');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('warehouse_base_positions', foreignKey);
            }
            await queryRunner.dropTable('warehouse_base_positions');
        }
    }
}
