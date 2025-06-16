import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_report_configuration20250611113109 implements MigrationInterface {
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
                name: 'warehouse_report_configuration',
                columns: [
                    {
                        name: 'report_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'digital_signature_required_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611113109-warehouse_report_configuration.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611113109-warehouse_report_configuration.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('warehouse_report_configuration', 'FK_warehouse_report_configuration_report_configuration');
        await queryRunner.dropForeignKey('warehouse_report_configuration', 'FK_warehouse_report_configuration_warehouse');
        await queryRunner.dropTable('warehouse_report_configuration');
    }
}
