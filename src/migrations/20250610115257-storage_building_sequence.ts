import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ustorage_building_sequence20250610115257 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the storage_building_sequence table already exists
        const tableExists = await queryRunner.hasTable('storage_building_sequence');
        if (!tableExists) {
            await queryRunner.createTable(
                new Table({
                    name: 'storage_building_sequence',
                    columns: [
                        {
                            name: 'destination_building_id',
                            type: 'varchar',
                            isPrimary: true,
                        },
                        {
                            name: 'warehouse_id',
                            type: 'uuid',
                            isNullable: true,
                        },
                    ],
                }),
                true,
            );

            // Check if warehouses table exists before creating foreign key
            const warehousesTableExists = await queryRunner.hasTable('warehouses');
            if (warehousesTableExists) {
                await queryRunner.createForeignKey(
                    'storage_building_sequence',
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
            console.log('Skipping table creation as the storage_building_sequence table already exists.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('storage_building_sequence');
        const foreignKey = table?.foreignKeys.find(fk => 
            fk.columnNames.indexOf('warehouse_id') !== -1
        );
        if (foreignKey) {
            await queryRunner.dropForeignKey('storage_building_sequence', foreignKey);
        }
        await queryRunner.dropTable('storage_building_sequence');
    }
}
