import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureceiving_line20250613112516 implements MigrationInterface {
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
                name: 'receiving_line',
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
                        name: 'invoice_line_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'invoice_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'invoice_subline_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'lot_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'origin_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'consignment_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'inventory_attribute_string_1',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_string_10',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_integer_1',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_integer_5',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'integer_attribute_float_1',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_float_2',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_float_3',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_date_1',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_date_2',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'customs_consignment_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on CustomsConsignment.customs_consignment_id type
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'shipment_line_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar based on ShipmentLine.shipment_line_id type
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112516-receiving_line.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112516-receiving_line.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('receiving_line', 'FK_receiving_line_customs_consignment_id');
        await queryRunner.dropForeignKey('receiving_line', 'FK_receiving_line_shipment_line_id');
        await queryRunner.dropTable('receiving_line');
    }
}