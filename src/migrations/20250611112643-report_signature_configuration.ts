import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureport_signature_configuration20250611112643 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'report_signature_configuration',
                columns: [
                    {
                        name: 'report_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'signature_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'report_page',
                        type: 'int'
                    },
                    {
                        name: 'signature_top_coordinate',
                        type: 'int'
                    },
                    {
                        name: 'signature_left_coordinate',
                        type: 'int'
                    },
                    {
                        name: 'signature_length',
                        type: 'int'
                    },
                    {
                        name: 'signature_width',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('report_signature_configuration',
            new TableForeignKey({
                columnNames: ['report_id'],
                referencedColumnNames: ['report_id'],
                referencedTableName: 'report_configuration',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('report_signature_configuration', 'FK_report_signature_configuration_report_configuration');
        await queryRunner.dropTable('report_signature_configuration');
    }
}
