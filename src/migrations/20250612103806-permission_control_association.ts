import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upermission_control_association20250612103806 implements MigrationInterface {
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
                name: 'Permission_Control_Association',
                columns: [
                    {
                        name: 'permission_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'role_id',
                        type: 'varchar',
                        isPrimary: true
                    },
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
                        name: 'control_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'permission_mask',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'hidden_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'web_control_type',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612103806-permission_control_association.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Permission_Control_Association', 'FK_Permission_Control_Association_permission_id');
        await queryRunner.dropForeignKey('Permission_Control_Association', 'FK_Permission_Control_Association_role_id');
        await queryRunner.dropForeignKey('Permission_Control_Association', 'FK_Permission_Control_Association_application_id');
        await queryRunner.dropForeignKey('Permission_Control_Association', 'FK_Permission_Control_Association_form_id');
        await queryRunner.dropTable('Permission_Control_Association');
    }
}
