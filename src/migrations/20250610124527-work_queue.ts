import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwork_queue20250610124527 implements MigrationInterface {
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
                name: 'work_queue',
                columns: [
                    {
                        name: 'registration_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        const pickWorkHeaderTableExists = await queryRunner.hasTable('pick_work_header');
        if (pickWorkHeaderTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610124527-work_queue.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for work_reference as the pick_work_header table does not exist yet.');
        }
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('work_queue');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('work_queue', foreignKey);
            }
            await queryRunner.dropTable('work_queue');
        }
    }
}
