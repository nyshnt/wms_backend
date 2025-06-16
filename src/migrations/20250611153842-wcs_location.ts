import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwcs_location20250611153842 implements MigrationInterface {
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
                name: 'wcs_location',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'stock_location',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611153842-wcs_location.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_location', 'FK_wcs_location_warehouse_id');
        await queryRunner.dropForeignKey('wcs_location', 'FK_wcs_location_stock_location');
        await queryRunner.dropForeignKey('wcs_location', 'FK_wcs_location_wcs_id');
        await queryRunner.dropTable('wcs_location');
    }
}
