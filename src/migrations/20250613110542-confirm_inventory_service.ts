import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uconfirm_inventory_service20250613110542 implements MigrationInterface {
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
                name: 'cnfrm_inv_serv',
                columns: [
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'inventory_ID',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'load_level',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'exitpoint_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'exitpoint',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'sort_sequence',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'compound_user_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'compound_figure',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'compound_date',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'service_result',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'invoice_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'invoice_line_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'invoice_subline_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'unit_quantity',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'alternate_identifier',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'service_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'supplier_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_number', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_client_id', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
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
                    },
                    {
                        name: 'shipment_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on ShipmentHeader.shipment_id type
                        isNullable: true
                    },
                    {
                        name: 'user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');

        // Composite foreign key to PartMaster
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');

        // Composite foreign key to OrderLine
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110542-confirm_inventory_service.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_warehouse_id');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_service_id');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_supplier_number');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_client_id');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_inventory_status');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_part_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_order_number');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_order_line'); // Generic name for composite FK
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_shipment_id');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_user_id');
        await queryRunner.dropTable('cnfrm_inv_serv');
    }
}