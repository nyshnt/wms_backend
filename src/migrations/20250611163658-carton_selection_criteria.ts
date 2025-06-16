import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucarton_selection_criteria20250611163658 implements MigrationInterface {
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
                name: 'carton_selection_criteria',
                columns: [
                    {
                        name: 'carton_selection_criteria_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    },
                    {
                        name: 'warehouse_override_id',
                        type: 'varchar'
                    },
                    {
                        name: 'logical_operator',
                        type: 'varchar'
                    },
                    {
                        name: 'table_name',
                        type: 'varchar'
                    },
                    {
                        name: 'field_name',
                        type: 'varchar'
                    },
                    {
                        name: 'operator',
                        type: 'varchar'
                    },
                    {
                        name: 'value',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );
    } catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('carton_selection_criteria');
    }
}
