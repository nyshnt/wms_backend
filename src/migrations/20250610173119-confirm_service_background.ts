import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uconfirm_service_background20250610173119 implements MigrationInterface {
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
                name: 'Confirm_Service_Background',
                columns: [
                    {
                        name: 'service_instance_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'post_confirmation_value_command',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610173119-confirm_service_background.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Confirm_Service_Background', 'FK_confirm_service_background_service_instance');
        await queryRunner.dropTable('Confirm_Service_Background');
    }
}
