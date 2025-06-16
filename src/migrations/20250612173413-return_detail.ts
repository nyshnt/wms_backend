import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureturn_detail20250612173413 implements MigrationInterface {
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
                name: 'return_detail',
                columns: [
                    {
                        name: 'rma_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sequence_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'line_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'expected_quantity',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'identified_quantity',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'receiving_key',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to ReturnHeader
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612173413-return_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612173413-return_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612173413-return_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('return_detail', 'FK_return_detail_return_header'); // Generic name for composite FK
        await queryRunner.dropForeignKey('return_detail', 'FK_return_detail_part_number');
        await queryRunner.dropForeignKey('return_detail', 'FK_return_detail_part_client_id');
        await queryRunner.dropTable('return_detail');
    }
}