import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucycle_count_schedule20250611134640 implements MigrationInterface {
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
                name: 'cycle_count_schedule',
                columns: [
                    {
                        name: 'sequence_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'count_id',
                        type: 'varchar'
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'part_number',
                        type: 'varchar'
                    },
                    {
                        name: 'count_batch_number',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611134640-cycle_count_schedule.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611134640-cycle_count_schedule.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_schedule', 'FK_cycle_count_schedule_warehouse_id');
        await queryRunner.dropForeignKey('cycle_count_schedule', 'FK_cycle_count_schedule_part_number');
        await queryRunner.dropTable('cycle_count_schedule');
    }
}
