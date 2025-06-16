import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ugrid_menu_item20250613112013 implements MigrationInterface {
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
                name: 'grid_menu_item',
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
                        name: 'level_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'menu_item_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'menu_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'enable_formula',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'selection_rule',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'parent_item_name', // Column for self-referencing foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'button_key', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to GridDefinition (based on GridDefinition's primary key)
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112013-grid_menu_item.ts. You should create these foreign keys when making APIs.');

        // Separate foreign key for grid_variable_name to GridDefinition
        // Note: This assumes 'grid_variable_name' is a unique key in 'grid_definition'
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112013-grid_menu_item.ts. You should create these foreign keys when making APIs.');

        // Separate foreign key for customer_level to GridDefinition
        // Note: This assumes 'customer_level' is a unique key in 'grid_definition'
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112013-grid_menu_item.ts. You should create these foreign keys when making APIs.');

        // Self-referencing foreign key for parent_item_name
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112013-grid_menu_item.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112013-grid_menu_item.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_grid_definition_composite'); // Generic name for composite FK
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_grid_variable_name');
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_customer_level');
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_parent_item_name');
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_button_key');
        await queryRunner.dropTable('grid_menu_item');
    }
}