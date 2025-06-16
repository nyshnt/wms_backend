import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwcm_area20250611153003 implements MigrationInterface {
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
                name: 'wcs_area',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'area_code',
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
      console.log('Note: Foreign keys were not created for 20250611153003-wcm_area.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611153003-wcm_area.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611153003-wcm_area.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_area', 'FK_wcs_area_warehouse_id');
        await queryRunner.dropForeignKey('wcs_area', 'FK_wcs_area_area_code');
        await queryRunner.dropForeignKey('wcs_area', 'FK_wcs_area_wcs_id');
        await queryRunner.dropTable('wcs_area');
    }
}
