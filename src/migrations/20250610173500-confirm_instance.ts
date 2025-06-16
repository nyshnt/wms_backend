import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uconfirm_instance20250610173500 implements MigrationInterface {
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
                name: 'cnfrm_serv_ins',
                columns: [
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'service_instance_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar'
                    },
                    {
                        name: 'service_instance_type',
                        type: 'varchar'
                    },
                    {
                        name: 'confirm_service_instance',
                        type: 'varchar'
                    },
                    {
                        name: 'insertion_user_id',
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
                        name: 'last_update_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610173500-confirm_instance.ts. You should create these foreign keys when making APIs.');
    }   catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cnfrm_serv_ins', 'FK_cnfrm_serv_ins_confirm_non_inventory_service');
        await queryRunner.dropTable('cnfrm_serv_ins');
    }
}
