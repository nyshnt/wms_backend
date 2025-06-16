import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uvariable_identifier_type20250612111748 implements MigrationInterface {
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
                name: 'Variable_Identifier_Type',
                columns: [
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'identifier_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'field_identifier',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'system_id_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'reference_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'work_key_flag',
                        type: 'boolean',
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
      console.log('Note: Foreign keys were not created for 20250612111748-variable_identifier_type.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Variable_Identifier_Type', 'FK_Variable_Identifier_Type_variable_name');
        await queryRunner.dropTable('Variable_Identifier_Type');
    }
}
