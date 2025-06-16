import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucustomer_warehouse_putaway_location_field20250612162521 implements MigrationInterface {
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
                name: 'customer_warehouse_putaway_location_field',
                columns: [
                    {
                        name: 'customer_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int', // Assuming 'Number' maps to 'int' for primary column
                        isPrimary: true
                    },
                    {
                        name: 'area_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isNullable: false
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Composite foreign key to CustomerWarehousePutawayLocation
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612162521-customer_warehouse_putaway_location_field.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('customer_warehouse_putaway_location_field', 'FK_customer_warehouse_putaway_location_field_composite'); // Generic name for composite FK
        await queryRunner.dropTable('customer_warehouse_putaway_location_field');
    }
}