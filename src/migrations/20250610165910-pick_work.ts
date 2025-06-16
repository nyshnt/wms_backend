import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_work20250610165910 implements MigrationInterface {
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
                name: 'pick_work',
                columns: [
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'schedule_batch_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610165910-pick_work.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_work', 'FK_pick_work_part_number');
        await queryRunner.dropForeignKey('pick_work', 'FK_pick_work_part_client_id');
        await queryRunner.dropTable('pick_work');
    }
}
