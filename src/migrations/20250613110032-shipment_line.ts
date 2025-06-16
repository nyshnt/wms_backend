import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ushipment_line20250613110032 implements MigrationInterface {
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
                name: 'shipment_line',
                columns: [
                    {
                        name: 'shipment_line_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'shipment_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'order_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'order_line_number', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'order_subline_number', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110032-shipment_line.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110032-shipment_line.ts. You should create these foreign keys when making APIs.');

        // Composite foreign key to OrderLine
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110032-shipment_line.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('shipment_line', 'FK_shipment_line_client_id');
        await queryRunner.dropForeignKey('shipment_line', 'FK_shipment_line_order_number');
        await queryRunner.dropForeignKey('shipment_line', 'FK_shipment_line_order_line'); // Generic name for composite FK
        await queryRunner.dropTable('shipment_line');
    }
}