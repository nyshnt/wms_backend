import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udefault_service20250612180945 implements MigrationInterface {
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
                name: 'def_serv',
                columns: [
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_service_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'carrier_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'inventory_status',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'inventory_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'customer_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'order_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'service_rate_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'order_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'order_line_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'order_subline_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'service_level',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'customer_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'destination_area',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'trailer_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'vehicle_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'rate_service_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'address_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'stop_activity_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'common_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'usrid',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'destination_location',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180945-default_service.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_client_id');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_part_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_inventory_status');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_supplier_number');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_customer_number');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_service_rate_id');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_order_number');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_order_line'); // Generic name for composite FK
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_trailer_type');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_vehicle_type');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_address_id');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_user_id');
        await queryRunner.dropTable('def_serv');
    }
}