import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uconfirm_service_value20250610175817 implements MigrationInterface {
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
                name: 'Confirm_Service_Value',
                columns: [
                    {
                        name: 'service_instance_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirm_value_variable_name',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirm_service_value',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirm_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirmation_date',
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
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610175817-confirm_service_value.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Confirm_Service_Value', 'FK_confirm_service_value_service_instance');
        await queryRunner.dropForeignKey('Confirm_Service_Value', 'FK_confirm_service_value_confirm_service_instance');
        await queryRunner.dropForeignKey('Confirm_Service_Value', 'FK_confirm_service_value_confirm_service');
        await queryRunner.dropForeignKey('Confirm_Service_Value', 'FK_confirm_service_value_confirm_non_inventory_service');
        await queryRunner.dropTable('Confirm_Service_Value');
    }
}
