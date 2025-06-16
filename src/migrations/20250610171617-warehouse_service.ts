import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_service20250610171617 implements MigrationInterface {
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
                name: 'Warehouse_Service',
                columns: [
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'mixed_part_flag',
                        type: 'boolean',
                    },
                    {
                        name: 'special_service_code',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp',
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'service_enabled_flag',
                        type: 'boolean',
                    },
                    {
                        name: 'load_level',
                        type: 'varchar',
                        length: '255',
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610171617-warehouse_service.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Warehouse_Service', 'FK_Warehouse_Service_service_id');
        await queryRunner.dropForeignKey('Warehouse_Service', 'FK_Warehouse_Service_warehouse_id');
        await queryRunner.dropForeignKey('Warehouse_Service', 'FK_Warehouse_Service_confirm_service_id');
        await queryRunner.dropForeignKey('Warehouse_Service', 'FK_Warehouse_Service_service_instance_id');
        await queryRunner.dropTable('Warehouse_Service');
    }
}
