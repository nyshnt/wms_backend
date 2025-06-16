import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucustomer_warehouse_destination_location20250612162326 implements MigrationInterface {
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
                name: 'customer_warehouse_destination_location',
                columns: [
                    {
                        name: 'customer_number',
                        type: 'varchar', // Assuming varchar based on CustomerMaster.customer_number type
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar', // Assuming varchar based on Warehouse.warehouse_id type
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar', // Assuming varchar based on Client.client_id type
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'destination_area',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612162326-customer_warehouse_destination_location.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612162326-customer_warehouse_destination_location.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612162326-customer_warehouse_destination_location.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('customer_warehouse_destination_location', 'FK_customer_warehouse_destination_location_customer_number');
        await queryRunner.dropForeignKey('customer_warehouse_destination_location', 'FK_customer_warehouse_destination_location_warehouse_id');
        await queryRunner.dropForeignKey('customer_warehouse_destination_location', 'FK_customer_warehouse_destination_location_client_id');
        await queryRunner.dropTable('customer_warehouse_destination_location');
    }
}