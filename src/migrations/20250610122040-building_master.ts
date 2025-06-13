import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ubuilding_master20250610122040 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('building_master');
        if (!tableExists) {
            await queryRunner.createTable(
                new Table({
                    name: 'building_master',
                    columns: [
                        {
                            name: 'building_id',
                            type: 'varchar',
                            isPrimary: true,
                        },
                        {
                            name: 'warehouse_id',
                            type: 'uuid',
                            isPrimary: true,
                        },
                    ],
                }),
                true,
            );

            const warehousesTableExists = await queryRunner.hasTable('warehouses');
            if (warehousesTableExists) {
                await queryRunner.createForeignKey(
                    'building_master',
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
        } else {
            console.log('Skipping table creation as the building_master table already exists.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('building_master');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('building_master', foreignKey);
            }
            await queryRunner.dropTable('building_master');
        }
    }
}
