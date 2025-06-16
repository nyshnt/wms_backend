import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ugrid_view_definition20250612133427 implements MigrationInterface {
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
                name: 'grid_view_definition',
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
                        name: 'grid_variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'view_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'system_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_title_formula',
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

        // Composite foreign key to GridDefinition
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133427-grid_view_definition.ts. You should create these foreign keys when making APIs.');

        // Separate foreign key for grid_variable_name to GridDefinition
        // Note: This assumes 'grid_variable_name' is a unique or primary key in 'grid_definition'
        // or that it forms part of a valid foreign key relationship as per your schema.
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133427-grid_view_definition.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133427-grid_view_definition.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_view_definition', 'FK_grid_view_definition_composite_grid_definition'); // Generic name for composite FK
        await queryRunner.dropForeignKey('grid_view_definition', 'FK_grid_view_definition_grid_variable_name');
        await queryRunner.dropForeignKey('grid_view_definition', 'FK_grid_view_definition_user_id');
        await queryRunner.dropTable('grid_view_definition');
    }
}