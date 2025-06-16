import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uconfirm_non_inventory_service20250610180745 implements MigrationInterface {
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
                name: 'cnfrm_noninv_serv',
                columns: [
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'service_id',
                        type: 'varchar'
                    },
                    {
                        name: 'sort_sequence',
                        type: 'varchar'
                    },
                    {
                        name: 'non_inventory_ID',
                        type: 'varchar'
                    },
                    {
                        name: 'non_inventory_type',
                        type: 'varchar'
                    },
                    {
                        name: 'trailer_type',
                        type: 'varchar'
                    },
                    {
                        name: 'vehicle_type',
                        type: 'varchar'
                    },
                    {
                        name: 'service_result',
                        type: 'varchar'
                    },
                    {
                        name: 'addition_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'compound_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'compound_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'order_number',
                        type: 'varchar'
                    },
                    {
                        name: 'order_line_number',
                        type: 'varchar'
                    },
                    {
                        name: 'order_subline_number',
                        type: 'varchar'
                    },
                    {
                        name: 'service_level',
                        type: 'varchar'
                    },
                    {
                        name: 'customer_type',
                        type: 'varchar'
                    },
                    {
                        name: 'destination_area',
                        type: 'varchar'
                    },
                    {
                        name: 'rate_service_name',
                        type: 'varchar'
                    },
                    {
                        name: 'address_id',
                        type: 'varchar'
                    },
                    {
                        name: 'stop_activity_type',
                        type: 'varchar'
                    },
                    {
                        name: 'common_code',
                        type: 'varchar'
                    },
                    {
                        name: 'version_number',
                        type: 'varchar'
                    },
                    {
                        name: 'insertion_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'insertion_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610180745-confirm_non_inventory_service.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_warehouse');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_service_master');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_trailer_type');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_vehicle_type');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_user_master');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_order_header');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_order_line');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_address_master');
        await queryRunner.dropTable('cnfrm_noninv_serv');
    }
}
