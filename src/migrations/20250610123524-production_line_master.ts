import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uproduction_line_master20250610123524 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'production_line_master',
                columns: [
                    {
                        name: 'production_line',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'exclusion_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'production_care',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'production_line_master',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouses',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('production_line_master', 'FK_production_line_master_warehouse_id');
        await queryRunner.dropTable('production_line_master');
    }
}
