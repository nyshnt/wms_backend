import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureceiving_invoice_header20250612171805 implements MigrationInterface {
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
                name: 'receiving_invoice_header',
                columns: [
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'invoice_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171805-receiving_invoice_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171805-receiving_invoice_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171805-receiving_invoice_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171805-receiving_invoice_header.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('receiving_invoice_header', 'FK_receiving_invoice_header_tracking_number');
        await queryRunner.dropForeignKey('receiving_invoice_header', 'FK_receiving_invoice_header_client_id');
        await queryRunner.dropForeignKey('receiving_invoice_header', 'FK_receiving_invoice_header_supplier_number');
        await queryRunner.dropForeignKey('receiving_invoice_header', 'FK_receiving_invoice_header_warehouse_id');
        await queryRunner.dropTable('receiving_invoice_header');
    }
}