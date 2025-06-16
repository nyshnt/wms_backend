import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ugrid_definition20250612133149 implements MigrationInterface {
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
                name: 'grid_definition',
                columns: [
                    {
                        name: 'level_id',
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
                        isNullable: true
                    },
                    {
                        name: 'parent_level_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'grid_variable_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'grid_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'parent_column',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'child_column',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'grid_menu_name',
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

        // Note: The foreign key for 'parent_level_id' references 'level_id' in 'grid_definition'.
        // If 'grid_definition' has a composite primary key, ensure 'level_id' alone is unique
        // or consider a composite foreign key if the parent relationship involves the full primary key.
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133149-grid_definition.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133149-grid_definition.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133149-grid_definition.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_definition', 'FK_grid_definition_parent_level_id');
        await queryRunner.dropForeignKey('grid_definition', 'FK_grid_definition_application_id');
        await queryRunner.dropForeignKey('grid_definition', 'FK_grid_definition_form_id');
        await queryRunner.dropTable('grid_definition');
    }
}