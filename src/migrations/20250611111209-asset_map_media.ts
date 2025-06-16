import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_map_media20250611111209 implements MigrationInterface {
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
                name: 'asset_map_media',
                columns: [
                    {
                        name: 'asset_media_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'map_detail_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611111209-asset_map_media.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating asset_map_media table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset_map_media', 'FK_asset_map_media_asset_map_detail');
        await queryRunner.dropTable('asset_map_media');
    }
}
