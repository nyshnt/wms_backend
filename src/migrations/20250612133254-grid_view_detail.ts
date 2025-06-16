import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ugrid_view_detail20250612133254 implements MigrationInterface {
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
                name: 'grid_view_detail',
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
                        name: 'view_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'view_field_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'view_field_width',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'view_field_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'view_field_visible_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'view_field_sort_order',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'view_field_sort_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'view_group_order',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'view_formula',
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

        // Composite foreign key to GridViewDefinition
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133254-grid_view_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_view_detail', 'FK_grid_view_detail_grid_view_definition'); // Generic name for composite FK
        await queryRunner.dropTable('grid_view_detail');
    }
}