import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_service_inventory_status20250610173330 implements MigrationInterface {
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
                name: 'Warehouse_Service_Inventory_Status',
                columns: [
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'inventory_status',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610173330-warehouse_service_inventory_status.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Warehouse_Service_Inventory_Status', 'FK_warehouse_service_inventory_status_service_master');
        await queryRunner.dropForeignKey('Warehouse_Service_Inventory_Status', 'FK_warehouse_service_inventory_status_warehouse');
        await queryRunner.dropForeignKey('Warehouse_Service_Inventory_Status', 'FK_warehouse_service_inventory_status_inventory_status');
        await queryRunner.dropTable('Warehouse_Service_Inventory_Status');
    }
}
