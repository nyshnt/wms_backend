import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucycle_count_header20250611134947 implements MigrationInterface {
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
                name: 'cycle_count_header',
                columns: [
                    {
                        name: 'count_batch_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'creation_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'inventory_identifier_1',
                        type: 'varchar'
                    },
                    {
                        name: 'inventory_value_1',
                        type: 'varchar'
                    },
                    {
                        name: 'identifier_flag_1',
                        type: 'boolean'
                    },
                    {
                        name: 'sequence_number',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611134947-cycle_count_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611134947-cycle_count_header.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_header', 'FK_cycle_count_header_warehouse_id');
        await queryRunner.dropForeignKey('cycle_count_header', 'FK_cycle_count_header_sequence_number');
        await queryRunner.dropTable('cycle_count_header');
    }
}
