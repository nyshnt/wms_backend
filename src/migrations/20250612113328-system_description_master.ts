import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Usystem_description_master20250612113328 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'System_Description_Master',
                columns: [
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'mls_text',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'short_description',
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

        await queryRunner.createForeignKey('System_Description_Master',
            new TableForeignKey({
                columnNames: ['column_name', 'column_value', 'locale_id'],
                referencedColumnNames: ['column_name', 'column_value', 'locale_id'],
                referencedTableName: 'description_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('System_Description_Master', 'FK_System_Description_Master_column_name_column_value_locale_id');
        await queryRunner.dropTable('System_Description_Master');
    }
}
