import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureason_code_reason_group20250611124219 implements MigrationInterface {
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
                name: 'reason_code_reason_group',
                columns: [
                    {
                        name: 'reason_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'reason_group',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611124219-reason_code_reason_group.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611124219-reason_code_reason_group.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('reason_code_reason_group', 'FK_reason_code_reason_group_reason_code');
        await queryRunner.dropForeignKey('reason_code_reason_group', 'FK_reason_code_reason_group_reason_group');
        await queryRunner.dropTable('reason_code_reason_group');
    }
}
