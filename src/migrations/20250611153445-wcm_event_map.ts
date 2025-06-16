import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwcm_event_map20250611153445 implements MigrationInterface {
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
                name: 'wcs_event_map',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'event_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'direction',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'event_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611153445-wcm_event_map.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611153445-wcm_event_map.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_event_map', 'FK_wcs_event_map_warehouse_id');
        await queryRunner.dropForeignKey('wcs_event_map', 'FK_wcs_event_map_wcs_id');
        await queryRunner.dropTable('wcs_event_map');
    }
}
