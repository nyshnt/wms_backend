import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_customer_master20250612161410 implements MigrationInterface {
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
                name: 'warehouse_customer_master',
                columns: [
                    {
                        name: 'customer_number',
                        type: 'varchar', // Assuming varchar based on CustomerMaster.customer_number type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted as it conflicts with JoinColumn for FK
                        // and type is set based on referencedColumnName for logical consistency.
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar', // Assuming varchar based on Warehouse.warehouse_id type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted.
                    },
                    {
                        name: 'client_id',
                        type: 'varchar', // Assuming varchar based on Client.client_id type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted.
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612161410-warehouse_customer_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612161410-warehouse_customer_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612161410-warehouse_customer_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('warehouse_customer_master', 'FK_warehouse_customer_master_customer_number');
        await queryRunner.dropForeignKey('warehouse_customer_master', 'FK_warehouse_customer_master_warehouse_id');
        await queryRunner.dropForeignKey('warehouse_customer_master', 'FK_warehouse_customer_master_client_id');
        await queryRunner.dropTable('warehouse_customer_master');
    }
}