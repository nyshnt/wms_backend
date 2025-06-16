import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucriteria_master20250612133730 implements MigrationInterface {
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
                name: 'criteria_master',
                columns: [
                    {
                        name: 'application_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'form_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'profile_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'criteria_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'criteria_value',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to ProfileMaster
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133730-criteria_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('criteria_master', 'FK_criteria_master_profile_master'); // Generic name for composite FK
        await queryRunner.dropTable('criteria_master');
    }
}