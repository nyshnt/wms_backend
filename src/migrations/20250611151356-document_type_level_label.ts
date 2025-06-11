import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udocument_type_level_label20250611151356 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'document_type_level_label',
                columns: [
                    {
                        name: 'document_type_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'parent_uom_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('document_type_level_label',
            new TableForeignKey({
                columnNames: ['document_type_code'],
                referencedColumnNames: ['document_type_code'],
                referencedTableName: 'document_type_label',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('document_type_level_label',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('document_type_level_label',
            new TableForeignKey({
                columnNames: ['last_update_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('document_type_level_label', 'FK_document_type_level_label_document_type_code');
        await queryRunner.dropForeignKey('document_type_level_label', 'FK_document_type_level_label_insert_user_id');
        await queryRunner.dropForeignKey('document_type_level_label', 'FK_document_type_level_label_last_update_user_id');
        await queryRunner.dropTable('document_type_level_label');
    }
}
