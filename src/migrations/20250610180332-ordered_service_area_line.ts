import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uordered_service_area_line20250610180332 implements MigrationInterface {
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
                name: 'ord_sery_are_line',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'order_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_ID',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'service_rate_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_service_code',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean'
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
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610180332-ordered_service_area_line.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('ord_sery_are_line', 'FK_ord_sery_are_line_service_master');
        await queryRunner.dropForeignKey('ord_sery_are_line', 'FK_ord_sery_are_line_service_rate_master');
        await queryRunner.dropForeignKey('ord_sery_are_line', 'FK_ord_sery_are_line_default_service');
        await queryRunner.dropForeignKey('ord_sery_are_line', 'FK_ord_sery_are_line_confirm_service');
        await queryRunner.dropTable('ord_sery_are_line');
    }
}
