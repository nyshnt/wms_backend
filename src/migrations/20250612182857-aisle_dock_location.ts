import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uaisle_dock_location20250612182857 implements MigrationInterface {
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
                name: 'aisle_dock_location',
                columns: [
                    {
                        name: 'aisle_dock_location_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dock_location',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'dock_mode',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'sequence_number_primary',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'sequence_number_secondary',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'aisle_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'staging_location', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'building_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182857-aisle_dock_location.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182857-aisle_dock_location.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182857-aisle_dock_location.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182857-aisle_dock_location.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('aisle_dock_location', 'FK_aisle_dock_location_warehouse_id');
        await queryRunner.dropForeignKey('aisle_dock_location', 'FK_aisle_dock_location_aisle_id');
        await queryRunner.dropForeignKey('aisle_dock_location', 'FK_aisle_dock_location_staging_location');
        await queryRunner.dropForeignKey('aisle_dock_location', 'FK_aisle_dock_location_building_id');
        await queryRunner.dropTable('aisle_dock_location');
    }
}