import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ulocale_master20250612114430 implements MigrationInterface {
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
                name: 'location_master',
                columns: [
                    {
                        name: 'stock_location',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'storage_location',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'area_code',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612114430-locale_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('location_master', 'FK_location_master_warehouse_id');
        await queryRunner.dropForeignKey('location_master', 'FK_location_master_area_code');
        await queryRunner.dropTable('location_master');
    }
}
