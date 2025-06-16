import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uproduction_line_unavailable_schedule20250610123413 implements MigrationInterface {
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
                name: 'production_line_unavailable_schedule',
                columns: [
                    {
                        name: 'unavailable_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'production_line',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'begin_date',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'end_date',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'unavailable_reason_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        const unavailableScheduleNoteTable = await queryRunner.getTable('unavailable_schedule_note');
        if (unavailableScheduleNoteTable && unavailableScheduleNoteTable.indices.some(index => index.isUnique && index.columnNames.includes('unavailable_id'))) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610123413-production_line_unavailable_schedule.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for unavailable_id as the unavailable_schedule_note table does not have a unique constraint on unavailable_id.');
        }

        const warehousesTableExists = await queryRunner.hasTable('warehouses');
        if (warehousesTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610123413-production_line_unavailable_schedule.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for warehouse_id as the warehouses table does not exist yet.');
        }
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('production_line_unavailable_schedule');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('production_line_unavailable_schedule', foreignKey);
            }
            await queryRunner.dropTable('production_line_unavailable_schedule');
        }
    }
}
