import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Urma_line_item20250612172407 implements MigrationInterface {
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
                name: 'rma_line_item',
                columns: [
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
                        name: 'rma_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'rma_line_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'rma_sub_line_number',
                        type: 'varchar',
                        isNullable: true
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

        // Composite foreign key to RMAHeader
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612172407-rma_line_item.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('rma_line_item', 'FK_rma_line_item_rma_header'); // Generic name for composite FK
        await queryRunner.dropTable('rma_line_item');
    }
}