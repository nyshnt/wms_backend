import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uarea_inventory_status20250611155432 implements MigrationInterface {
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
                name: 'area_inventory_status',
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
                        name: 'inventory_status_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'modification_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611155432-area_inventory_status.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_warehouse_id');
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_area_code');
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_inventory_status_code');
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_insert_user_id');
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_modification_user_id');
        await queryRunner.dropTable('area_inventory_status');
    }
}
