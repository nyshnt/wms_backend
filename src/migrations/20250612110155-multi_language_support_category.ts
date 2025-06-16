import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Umulti_language_support_category20250612110155 implements MigrationInterface {
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
                name: 'Multi_Language_Support_Category',
                columns: [
                    {
                        name: 'mls_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'product_id',
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
                        name: 'variation_number',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'mls_text',
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
      console.log('Note: Foreign keys were not created for 20250612110155-multi_language_support_category.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Multi_Language_Support_Category', 'FK_Multi_Language_Support_Category_locale_id');
        await queryRunner.dropForeignKey('Multi_Language_Support_Category', 'FK_Multi_Language_Support_Category_application_id');
        await queryRunner.dropForeignKey('Multi_Language_Support_Category', 'FK_Multi_Language_Support_Category_form_id');
        await queryRunner.dropTable('Multi_Language_Support_Category');
    }
}
