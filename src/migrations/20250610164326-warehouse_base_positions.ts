import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_base_positions20250610164326 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
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
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610164326-warehouse_base_positions.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for warehouse_id as the warehouse table does not exist yet.');
        }
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
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
