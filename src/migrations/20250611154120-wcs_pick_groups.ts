import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwcs_pick_groups20250611154120 implements MigrationInterface {
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
                name: 'wcs_pick_groups',
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
                        name: 'work_type',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_groups',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611154120-wcs_pick_groups.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_pick_groups', 'FK_wcs_pick_groups_warehouse_id');
        await queryRunner.dropForeignKey('wcs_pick_groups', 'FK_wcs_pick_groups_wcs_id');
        await queryRunner.dropTable('wcs_pick_groups');
    }
}
