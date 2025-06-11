import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udocument_report_id20250611102330 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'document_report_id',
                columns: [
                    {
                        name: 'document_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'report_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('document_report_id',
            new TableForeignKey({
                columnNames: ['document_type'],
                referencedColumnNames: ['document_type'],
                referencedTableName: 'document_type',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('document_report_id',
            new TableForeignKey({
                columnNames: ['report_id'],
                referencedColumnNames: ['report_id'],
                referencedTableName: 'report_configuration',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('document_report_id', 'FK_document_report_id_document_type');
        await queryRunner.dropForeignKey('document_report_id', 'FK_document_report_id_report_configuration');
        await queryRunner.dropTable('document_report_id');
    }
}
