import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udocument_label_format20250611102010 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'doc_lblfmt',
                columns: [
                    {
                        name: 'document_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'label_format',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('doc_lblfmt',
            new TableForeignKey({
                columnNames: ['document_type'],
                referencedColumnNames: ['document_type'],
                referencedTableName: 'document_type',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('doc_lblfmt',
            new TableForeignKey({
                columnNames: ['label_format'],
                referencedColumnNames: ['label_format'],
                referencedTableName: 'label_format',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('doc_lblfmt', 'FK_doc_lblfmt_document_type');
        await queryRunner.dropForeignKey('doc_lblfmt', 'FK_doc_lblfmt_label_format');
        await queryRunner.dropTable('doc_lblfmt');
    }
}
