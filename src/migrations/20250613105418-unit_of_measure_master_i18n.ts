import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uunit_of_measure_master_i18n20250613105418 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'unit_of_measure_master_i18n',
                columns: [
                    {
                        name: 'uom_category_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'uom_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'uom_symbol',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'master_uom_system_fk', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'unit_of_measure_master_i18n',
            new TableForeignKey({
                columnNames: ['locale_id'],
                referencedColumnNames: ['locale_id'],
                referencedTableName: 'locale_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'unit_of_measure_master_i18n',
            new TableForeignKey({
                columnNames: ['master_uom_system_fk'],
                referencedColumnNames: ['master_uom_system_fk'], // Assuming master_uom_system_fk is unique/primary in unit_of_measure_definition
                referencedTableName: 'unit_of_measure_definition',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('unit_of_measure_master_i18n', 'FK_unit_of_measure_master_i18n_locale_id');
        await queryRunner.dropForeignKey('unit_of_measure_master_i18n', 'FK_unit_of_measure_master_i18n_master_uom_system_fk');
        await queryRunner.dropTable('unit_of_measure_master_i18n');
    }
}