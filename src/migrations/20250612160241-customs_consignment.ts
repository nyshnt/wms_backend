import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucustoms_consignment20250612160241 implements MigrationInterface {
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
                name: 'customs_consignment',
                columns: [
                    {
                        name: 'customs_consignment_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'work_order_flag',
                        type: 'boolean',
                        default: false,
                        isNullable: false // default: false implies not nullable
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for warehouse_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for client_id
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612160241-customs_consignment.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612160241-customs_consignment.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('customs_consignment', 'FK_customs_consignment_warehouse_id');
        await queryRunner.dropForeignKey('customs_consignment', 'FK_customs_consignment_client_id');
        await queryRunner.dropTable('customs_consignment');
    }
}