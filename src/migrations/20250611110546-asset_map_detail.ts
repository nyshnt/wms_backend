import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_map_detail20250611110546 implements MigrationInterface {
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
                name: 'asset_map_detail',
                columns: [
                    {
                        name: 'map_detail_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );
    }
    catch (error) {
        console.error('Error creating asset_map_detail table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('asset_map_detail');
    }
}
