import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucycle_count_type20250611140122 implements MigrationInterface {
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
                name: 'cycle_count_type',
                columns: [
                    {
                        name: 'count_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'operation_code',
                        type: 'varchar'
                    },
                    {
                        name: 'detail_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cycle_count_type');
    }
}
