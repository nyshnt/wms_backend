import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uputaway_last_location20250612172817 implements MigrationInterface {
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
                name: 'putaway_last_location',
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
                        name: 'stock_location',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612172817-putaway_last_location.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612172817-putaway_last_location.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612172817-putaway_last_location.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612172817-putaway_last_location.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612172817-putaway_last_location.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_warehouse_id');
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_area_code');
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_stock_location');
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_part_number');
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_part_client_id');
        await queryRunner.dropTable('putaway_last_location');
    }
}