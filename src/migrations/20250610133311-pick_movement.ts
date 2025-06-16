import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_movement20250610133311 implements MigrationInterface {
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
                name: 'pick_movement',
                columns: [
                    {
                        name: 'combination_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'segment_number',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'storage_location',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        const locationMasterTableExists = await queryRunner.hasTable('location_master');
        if (locationMasterTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610133311-pick_movement.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for storage_location as the location_master table does not exist yet.');
        }
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('pick_movement');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('pick_movement', foreignKey);
            }
            await queryRunner.dropTable('pick_movement');
        }
    }
}
