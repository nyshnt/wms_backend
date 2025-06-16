import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureturn_header20250612173119 implements MigrationInterface {
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
                name: 'return_header',
                columns: [
                    {
                        name: 'rma_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'return_source_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'carrier_code',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612173119-return_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612173119-return_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612173119-return_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612173119-return_header.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('return_header', 'FK_return_header_warehouse_id');
        await queryRunner.dropForeignKey('return_header', 'FK_return_header_customer_number');
        await queryRunner.dropForeignKey('return_header', 'FK_return_header_client_id');
        await queryRunner.dropForeignKey('return_header', 'FK_return_header_carrier_code');
        await queryRunner.dropTable('return_header');
    }
}