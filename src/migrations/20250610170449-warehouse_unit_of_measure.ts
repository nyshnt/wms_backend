import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_unit_of_measure20250610170449 implements MigrationInterface {
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
                name: 'warehouse_unit_of_measure',
                columns: [
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'code_value',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'unit_of_measure_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'default_ship_release_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'default_work_release_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('warehouse_unit_of_measure');
    }
}
