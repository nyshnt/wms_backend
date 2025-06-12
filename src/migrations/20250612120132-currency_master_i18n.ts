import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucurrency_master_i18n20250612120132 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Currency_Master_I18N',
                columns: [
                    {
                        name: 'currency_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'decimal_places',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'thousands_separator',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'grouping_length',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'currency_symbol',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'positive_format',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'negative_format',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'fractional_digits',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Currency_Master_I18N');
    }
}
