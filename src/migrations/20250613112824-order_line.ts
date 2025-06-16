import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uorder_line20250613112824 implements MigrationInterface {
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
                name: 'order_line',
                columns: [
                    {
                        name: 'order_number',
                        type: 'varchar', // Based on referencedColumnName in OrderHeader
                        isPrimary: true
                    },
                    {
                        name: 'order_line_number',
                        type: 'uuid', // As per PrimaryGeneratedColumn('uuid') in entity
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'order_subline_number',
                        type: 'uuid', // As per PrimaryGeneratedColumn('uuid') in entity
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'distribution_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on Distribution.distribution_id type
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar based on Client.client_id type
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar based on Warehouse.warehouse_id type
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112824-order_line.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112824-order_line.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112824-order_line.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112824-order_line.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_line', 'FK_order_line_order_number');
        await queryRunner.dropForeignKey('order_line', 'FK_order_line_distribution_id');
        await queryRunner.dropForeignKey('order_line', 'FK_order_line_client_id');
        await queryRunner.dropForeignKey('order_line', 'FK_order_line_warehouse_id');
        await queryRunner.dropTable('order_line');
    }
}