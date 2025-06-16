import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uhold_master20250610165447 implements MigrationInterface {
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
                name: 'hold_master',
                columns: [
                    {
                        name: 'hold_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'hold_prefix',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
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
        await queryRunner.dropTable('hold_master');
    }
}
