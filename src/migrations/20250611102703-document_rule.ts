import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udocument_rule20250611102703 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'document_rule',
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
                        name: 'document_format',
                        type: 'varchar'
                    },
                    {
                        name: 'document_quantity',
                        type: 'int'
                    },
                    {
                        name: 'load_level',
                        type: 'varchar'
                    },
                    {
                        name: 'exitpoint',
                        type: 'varchar'
                    },
                    {
                        name: 'device_source',
                        type: 'varchar'
                    },
                    {
                        name: 'document_group',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('document_rule',
            new TableForeignKey({
                columnNames: ['document_type'],
                referencedColumnNames: ['document_type'],
                referencedTableName: 'document_type',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('document_rule', 'FK_document_rule_document_type');
        await queryRunner.dropTable('document_rule');
    }
}
