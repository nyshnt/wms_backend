import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Umulti_language_support_category20250612110155 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.createForeignKeys('Multi_Language_Support_Category', [
            new TableForeignKey({
                columnNames: ['locale_id'],
                referencedColumnNames: ['locale_id'],
                referencedTableName: 'locale_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['application_id'],
                referencedColumnNames: ['application_id'],
                referencedTableName: 'workflow_application',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Multi_Language_Support_Category', 'FK_Multi_Language_Support_Category_locale_id');
        await queryRunner.dropForeignKey('Multi_Language_Support_Category', 'FK_Multi_Language_Support_Category_application_id');
        await queryRunner.dropForeignKey('Multi_Language_Support_Category', 'FK_Multi_Language_Support_Category_form_id');
        await queryRunner.dropTable('Multi_Language_Support_Category');
    }
}
