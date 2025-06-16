import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uorder_header20250612155652 implements MigrationInterface {
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
                name: 'order_header',
                columns: [
                    {
                        name: 'order_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'order_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'client_id',
                        type: 'uuid',
                        isNullable: false // As per entity @Column, not @JoinColumn, so assuming not nullable from Column definition
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false // As per entity @Column
                    },
                    {
                        name: 'order_date',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'order_status',
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
      console.log('Note: Foreign keys were not created for 20250612155652-order_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612155652-order_header.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_header', 'FK_order_header_client_id');
        await queryRunner.dropForeignKey('order_header', 'FK_order_header_warehouse_id');
        await queryRunner.dropTable('order_header');
    }
}