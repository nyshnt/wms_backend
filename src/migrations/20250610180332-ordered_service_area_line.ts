import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uordered_service_area_line20250610180332 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'ord_sery_are_line',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'order_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_ID',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'service_rate_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_service_code',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'addition_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirm_service_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('ord_sery_are_line', [
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['service_id'],
                referencedTableName: 'service_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['service_rate_id'],
                referencedColumnNames: ['service_rate_id'],
                referencedTableName: 'service_rate_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['default_service_code'],
                referencedColumnNames: ['default_service_code'],
                referencedTableName: 'default_service',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['confirm_service_id'],
                referencedColumnNames: ['confirm_service_id'],
                referencedTableName: 'confirm_service',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('ord_sery_are_line', 'FK_ord_sery_are_line_service_master');
        await queryRunner.dropForeignKey('ord_sery_are_line', 'FK_ord_sery_are_line_service_rate_master');
        await queryRunner.dropForeignKey('ord_sery_are_line', 'FK_ord_sery_are_line_default_service');
        await queryRunner.dropForeignKey('ord_sery_are_line', 'FK_ord_sery_are_line_confirm_service');
        await queryRunner.dropTable('ord_sery_are_line');
    }
}
