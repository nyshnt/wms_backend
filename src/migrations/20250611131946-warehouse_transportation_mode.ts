import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_transportation_mode20250611131946 implements MigrationInterface {
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
                name: 'warehouse_transportation_mode',
                columns: [
                    {
                        name: 'transportation_mode',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'lock_user_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'unit_of_measure_code',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611131946-warehouse_transportation_mode.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611131946-warehouse_transportation_mode.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611131946-warehouse_transportation_mode.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('warehouse_transportation_mode', 'FK_warehouse_transportation_mode_transportation_mode');
        await queryRunner.dropForeignKey('warehouse_transportation_mode', 'FK_warehouse_transportation_mode_warehouse_id');
        await queryRunner.dropForeignKey('warehouse_transportation_mode', 'FK_warehouse_transportation_mode_unit_of_measure_code');
        await queryRunner.dropTable('warehouse_transportation_mode');
    }
}
