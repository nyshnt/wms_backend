import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucustomer_warehouse_schedule20250612161931 implements MigrationInterface {
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
                name: 'customer_warehouse_schedule',
                columns: [
                    {
                        name: 'customer_number',
                        type: 'varchar', // Assuming varchar based on CustomerMaster.customer_number type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted as it conflicts with JoinColumn for FK.
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar', // Assuming varchar based on Warehouse.warehouse_id type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted.
                    },
                    {
                        name: 'client_id',
                        type: 'varchar', // Assuming varchar based on Client.client_id type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted.
                    },
                    {
                        name: 'carrier_move_id',
                        type: 'varchar', // Assuming varchar based on CarrierMove.carrier_move_id type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted.
                    },
                    {
                        name: 'begin_day_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'begin_time',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'end_day_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'end_time',
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
      console.log('Note: Foreign keys were not created for 20250612161931-customer_warehouse_schedule.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612161931-customer_warehouse_schedule.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612161931-customer_warehouse_schedule.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612161931-customer_warehouse_schedule.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('customer_warehouse_schedule', 'FK_customer_warehouse_schedule_customer_number');
        await queryRunner.dropForeignKey('customer_warehouse_schedule', 'FK_customer_warehouse_schedule_warehouse_id');
        await queryRunner.dropForeignKey('customer_warehouse_schedule', 'FK_customer_warehouse_schedule_client_id');
        await queryRunner.dropForeignKey('customer_warehouse_schedule', 'FK_customer_warehouse_schedule_carrier_move_id');
        await queryRunner.dropTable('customer_warehouse_schedule');
    }
}