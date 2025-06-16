import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uage_profile20250612180625 implements MigrationInterface {
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
                name: 'age_profile',
                columns: [
                    {
                        name: 'age_profile_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612180625-age_profile.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('age_profile', 'FK_age_profile_inventory_status');
        await queryRunner.dropTable('age_profile');
    }
}