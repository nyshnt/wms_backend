import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Urf_terminal_master20250611103502 implements MigrationInterface {
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
                name: 'rf_terminal_master',
                columns: [
                    {
                        name: 'RF_vendor_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'terminal_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'device_code',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611103502-rf_terminal_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611103502-rf_terminal_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('rf_terminal_master', 'FK_rf_terminal_master_RF_vendor_master');
        await queryRunner.dropForeignKey('rf_terminal_master', 'FK_rf_terminal_master_device_master');
        await queryRunner.dropTable('rf_terminal_master');
    }
}
