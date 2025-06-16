import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uoption_authorization20250611165501 implements MigrationInterface {
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
                name: 'Option_Authorization',
                columns: [
                    {
                        name: 'option_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'auth_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'auth_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'permission_mask',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name_option',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611165501-option_authorization.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Option_Authorization', 'FK_Option_Authorization_option_name');
        await queryRunner.dropForeignKey('Option_Authorization', 'FK_Option_Authorization_role_id');
        await queryRunner.dropForeignKey('Option_Authorization', 'FK_Option_Authorization_user_id');
        await queryRunner.dropTable('Option_Authorization');
    }
}
