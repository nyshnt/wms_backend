import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uprofile_master20250612133539 implements MigrationInterface {
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
                name: 'profile_master',
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
                        name: 'disable_edit_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'default_profile_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'option_name', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // Assuming nullable as it's not primary and JoinColumn is used directly
                    },
                    {
                        name: 'user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // Assuming nullable
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133539-profile_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133539-profile_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133539-profile_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133539-profile_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('profile_master', 'FK_profile_master_application_id');
        await queryRunner.dropForeignKey('profile_master', 'FK_profile_master_form_id');
        await queryRunner.dropForeignKey('profile_master', 'FK_profile_master_option_name');
        await queryRunner.dropForeignKey('profile_master', 'FK_profile_master_user_id');
        await queryRunner.dropTable('profile_master');
    }
}