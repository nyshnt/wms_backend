import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ugrid_display_rule20250612133030 implements MigrationInterface {
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
                name: 'grid_display_rule',
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
                        name: 'level_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'grid_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'grid_field_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'display_rule_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'comparison_operator',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'comparison_value',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'maximum_value',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'foreground_color',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'background_color',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'fill_style',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'fill_color',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'font_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'font_bold_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'font_italic_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'font_strikethrough_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'font_underline_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'whole_row_flag',
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

        // Composite foreign key to GridDefinition
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133030-grid_display_rule.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612133030-grid_display_rule.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_display_rule', 'FK_grid_display_rule_grid_definition'); // Generic name for composite FK
        await queryRunner.dropForeignKey('grid_display_rule', 'FK_grid_display_rule_user_id');
        await queryRunner.dropTable('grid_display_rule');
    }
}