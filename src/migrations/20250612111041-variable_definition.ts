import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uvariable_definition20250612111041 implements MigrationInterface {
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
                name: 'Variable_Definition',
                columns: [
                    {
                        name: 'variable_name',
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
                        name: 'addon_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'constant_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'char_value',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'integer_value',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'float_value',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'date_value',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'default_command',
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
      console.log('Note: Foreign keys were not created for 20250612111041-variable_definition.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Variable_Definition', 'FK_Variable_Definition_variable_name_application_id_form_id_addon_id_customer_level');
        await queryRunner.dropTable('Variable_Definition');
    }
}
