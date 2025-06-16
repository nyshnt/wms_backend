import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uservice_rate_multi20250612170930 implements MigrationInterface {
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
                name: 'serstate_mul',
                columns: [
                    {
                        name: 'service_rate_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_service_code',
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
                        name: 'quantity_by_code',
                        type: 'varchar',
                        length: '255',
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
                        name: 'adhesion_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'modified_user_type',
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
                        name: 'last_update_user',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'invoice_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: false // As per entity @Column
                    },
                    {
                        name: 'invoice_line_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'invalid_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'inventory_assets',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612170930-service_rate_multi.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612170930-service_rate_multi.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('serstate_mul', 'FK_serstate_mul_service_rate_id');
        await queryRunner.dropForeignKey('serstate_mul', 'FK_serstate_mul_client_id');
        await queryRunner.dropTable('serstate_mul');
    }
}