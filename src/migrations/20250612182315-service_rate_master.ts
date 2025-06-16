import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uservice_rate_master20250612182315 implements MigrationInterface {
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
                name: 'service_rate_master',
                columns: [
                    {
                        name: 'service_rate_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'quantity_by_code',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'movement_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'category_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'order_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'service_level',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'service_enabled_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'load_level',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'category_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'destination_area',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'trailer_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'insertion_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'insertion_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'rate_service_name',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'stop_activity_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'common_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'version_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
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
                        name: 'inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'supplier_number', // Column for foreign key
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
                        name: 'confirm_service_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'vehicle_type', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_id', // Column for foreign key
                        type: 'varchar',
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
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');

        // Composite foreign key to PartMaster
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');

        // Composite foreign key to OrderLine
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182315-service_rate_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_client_id');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_part_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_inventory_status');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_supplier_number');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_order_number');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_order_line'); // Generic name for composite FK
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_confirm_service_id');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_vehicle_type');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_address_id');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_user_id');
        await queryRunner.dropTable('service_rate_master');
    }
}