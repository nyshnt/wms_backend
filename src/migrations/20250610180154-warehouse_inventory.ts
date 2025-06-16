import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_inventory20250610180154 implements MigrationInterface {
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
                name: 'wh_inv',
                columns: [
                    {
                        name: 'inventory_ID',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'load_level',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'exitpoint_type',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'exitpoint',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_registration',
                        type: 'varchar',
                        length: '255'
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
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirm_service_id',
                        type: 'varchar'
                    },
                    {
                        name: 'version',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'detailed_location',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_meter',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'insertion_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'last_update_id',
                        type: 'varchar',
                        length: '255'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610180154-warehouse_inventory.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wh_inv', 'FK_wh_inv_confirm_service');
        await queryRunner.dropTable('wh_inv');
    }
}
