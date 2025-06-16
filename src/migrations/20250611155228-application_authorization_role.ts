import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uapplication_authorization_role20250611155228 implements MigrationInterface {
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
                name: 'Application_Auth_Role',
                columns: [
                    {
                        name: 'role_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'parent_role_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'auth_group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'adjustment_threshold_cost',
                        type: 'decimal',
                        isNullable: true
                    },
                    {
                        name: 'adjustment_threshold_unit',
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

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611155228-application_authorization_role.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Application_Auth_Role', 'FK_Application_Auth_Role_parent_role_id');
        await queryRunner.dropTable('Application_Auth_Role');
    }
}
