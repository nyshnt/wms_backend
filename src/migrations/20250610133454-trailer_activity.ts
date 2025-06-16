import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Utrailer_activity20250610133454 implements MigrationInterface {
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
                name: 'trailer_activity',
                columns: [
                    {
                        name: 'row_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'asset_tag',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'trailer_activity_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'trailer_id',
                        type: 'varchar',
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                    },
                    {
                        name: 'trailer_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        const trailerMasterTableExists = await queryRunner.hasTable('trailer_master');
        if (trailerMasterTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610133454-trailer_activity.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for trailer_id as the trailer_master table does not exist yet.');
        }

        const warehouseTableExists = await queryRunner.hasTable('warehouse');
        if (warehouseTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610133454-trailer_activity.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for warehouse_id as the warehouse table does not exist yet.');
        }
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('trailer_activity');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('trailer_activity', foreignKey);
            }
            await queryRunner.dropTable('trailer_activity');
        }
    }
}
