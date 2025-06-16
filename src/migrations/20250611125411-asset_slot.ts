import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_slot20250611125411 implements MigrationInterface {
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
                name: 'asset_slot',
                columns: [
                    {
                        name: 'asset_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'slot',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'slot_code',
                        type: 'varchar'
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
        await queryRunner.dropTable('asset_slot');
    }
}
