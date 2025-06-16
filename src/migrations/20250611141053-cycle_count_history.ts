import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucycle_count_history20250611141053 implements MigrationInterface {
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
                name: 'cycle_count_history',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'count_batch_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'count_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'original_count_batch_number',
                        type: 'varchar'
                    },
                    {
                        name: 'inventory_identifier_1',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611141053-cycle_count_history.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611141053-cycle_count_history.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_history', 'FK_cycle_count_history_warehouse_id');
        await queryRunner.dropForeignKey('cycle_count_history', 'FK_cycle_count_history_count_batch_number');
        await queryRunner.dropTable('cycle_count_history');
    }
}
