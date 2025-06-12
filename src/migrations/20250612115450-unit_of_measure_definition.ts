import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uunit_of_measure_definition20250612115450 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Unit_Of_Measure_Definition',
                columns: [
                    {
                        name: 'master_uom_system',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'master_uom_category_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('Unit_Of_Measure_Definition',
            new TableForeignKey({
                columnNames: ['master_uom_category_id'],
                referencedColumnNames: ['master_uom_category_id'],
                referencedTableName: 'unit_of_measure_master_i18n',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Unit_Of_Measure_Definition', 'FK_Unit_Of_Measure_Definition_master_uom_category_id');
        await queryRunner.dropTable('Unit_Of_Measure_Definition');
    }
}
