import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Unavigation_bar_tab20250611164744 implements MigrationInterface {
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
                name: 'Navigation_Bar_Tab',
                columns: [
                    {
                        name: 'navigation_bar_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'menu_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'all_users_flag',
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
      console.log('Note: Foreign keys were not created for 20250611164744-navigation_bar_tab.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Navigation_Bar_Tab', 'FK_Navigation_Bar_Tab_navigation_bar_id');
        await queryRunner.dropForeignKey('Navigation_Bar_Tab', 'FK_Navigation_Bar_Tab_menu_group_id');
        await queryRunner.dropTable('Navigation_Bar_Tab');
    }
}
