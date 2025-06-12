import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uunit_of_measure_material20250612115745 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Unit_Of_Measure_Material',
                columns: [
                    {
                        name: 'uom_category_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'unit_of_measure_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'conversion_factor_numerator',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'conversion_factor_denominator',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'display_precision',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'host_uom_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('Unit_Of_Measure_Material',
            new TableForeignKey({
                columnNames: ['uom_category_id'],
                referencedColumnNames: ['uom_category_id'],
                referencedTableName: 'unit_of_measure_master_i18n',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Unit_Of_Measure_Material', 'FK_Unit_Of_Measure_Material_uom_category_id');
        await queryRunner.dropTable('Unit_Of_Measure_Material');
    }
}
