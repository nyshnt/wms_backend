import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwcs_discrete_header20250611154301 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wcs_discrete_header',
                columns: [
                    {
                        name: 'header_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'transaction_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'transaction_date',
                        type: 'timestamp',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('wcs_discrete_header', [
            new TableForeignKey({
                columnNames: ['wcs_id'],
                referencedColumnNames: ['wcs_id'],
                referencedTableName: 'wcs_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'wcs_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_discrete_header', 'FK_wcs_discrete_header_wcs_id');
        await queryRunner.dropForeignKey('wcs_discrete_header', 'FK_wcs_discrete_header_warehouse_id');
        await queryRunner.dropTable('wcs_discrete_header');
    }
}
