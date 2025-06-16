import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucycle_count_work20250612171519 implements MigrationInterface {
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
                name: 'cycle_count_work',
                columns: [
                    {
                        name: 'count_batch_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'inventory_value_1',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'stock_location', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'count_type', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171519-cycle_count_work.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171519-cycle_count_work.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171519-cycle_count_work.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171519-cycle_count_work.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171519-cycle_count_work.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_count_batch_number');
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_stock_location');
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_count_type');
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_part_number');
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_part_client_id');
        await queryRunner.dropTable('cycle_count_work');
    }
}