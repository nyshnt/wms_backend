import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucurrent_trailer_activity20250611150424 implements MigrationInterface {
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
                name: 'current_trailer_activity',
                columns: [
                    {
                        name: 'trailer_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'device_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611150424-current_trailer_activity.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611150424-current_trailer_activity.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611150424-current_trailer_activity.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611150424-current_trailer_activity.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('current_trailer_activity', 'FK_current_trailer_activity_trailer_id');
        await queryRunner.dropForeignKey('current_trailer_activity', 'FK_current_trailer_activity_user_id');
        await queryRunner.dropForeignKey('current_trailer_activity', 'FK_current_trailer_activity_device_code');
        await queryRunner.dropForeignKey('current_trailer_activity', 'FK_current_trailer_activity_warehouse_id');
        await queryRunner.dropTable('current_trailer_activity');
    }
}
