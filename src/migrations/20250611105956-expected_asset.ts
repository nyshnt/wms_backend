import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uexpected_asset20250611105956 implements MigrationInterface {
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
                name: 'expected_asset',
                columns: [
                    {
                        name: 'expected_asset_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar'
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar'
                    },
                    {
                        name: 'lot_number',
                        type: 'varchar'
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );
    }
    catch (error) {
        console.error('Error creating expected_asset table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('expected_asset');
    }
}
