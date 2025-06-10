import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_unit_of_measure20250610170449 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'warehouse_unit_of_measure',
                columns: [
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'code_value',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'unit_of_measure_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'default_ship_release_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'default_work_release_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('warehouse_unit_of_measure');
    }
}
