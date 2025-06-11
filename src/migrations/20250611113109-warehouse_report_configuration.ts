import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwarehouse_report_configuration20250611113109 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'warehouse_report_configuration',
                columns: [
                    {
                        name: 'report_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'digital_signature_required_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('warehouse_report_configuration',
            new TableForeignKey({
                columnNames: ['report_id'],
                referencedColumnNames: ['report_id'],
                referencedTableName: 'report_configuration',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('warehouse_report_configuration',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('warehouse_report_configuration', 'FK_warehouse_report_configuration_report_configuration');
        await queryRunner.dropForeignKey('warehouse_report_configuration', 'FK_warehouse_report_configuration_warehouse');
        await queryRunner.dropTable('warehouse_report_configuration');
    }
}
