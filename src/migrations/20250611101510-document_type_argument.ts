import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udocument_type_argument20250611101510 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'doc_typ_arg',
                columns: [
                    {
                        name: 'document_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'document_type_argument',
                        type: 'varchar'
                    },
                    {
                        name: 'required_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('doc_typ_arg',
            new TableForeignKey({
                columnNames: ['document_type'],
                referencedColumnNames: ['document_type'],
                referencedTableName: 'document_type',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('doc_typ_arg', 'FK_doc_typ_arg_document_type');
        await queryRunner.dropTable('doc_typ_arg');
    }
}
