import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udocument_rule_field20250611102831 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'document_rule_field',
                columns: [
                    {
                        name: 'document_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sequence_number',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'column_name',
                        type: 'varchar'
                    },
                    {
                        name: 'column_value',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('document_rule_field',
            new TableForeignKey({
                columnNames: ['document_type', 'sequence_number'],
                referencedColumnNames: ['document_type', 'sequence_number'],
                referencedTableName: 'document_rule',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('document_rule_field', 'FK_document_rule_field_document_rule');
        await queryRunner.dropTable('document_rule_field');
    }
}
