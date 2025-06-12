import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ulocale_parameter20250612115304 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Locale_Parameter',
                columns: [
                    {
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'currency_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'boolean_true_char',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'boolean_false_char',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'boolean_toggle_char',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'positive_sign_char',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'negative_sign_char',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'positive_sign_position',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'negative_sign_position',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'decimal_point_char',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'thousands_separator_char',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'number_grouping_pattern',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'date_format_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'month_display_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'date_separator_char',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'time_format_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'time_separator_char',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'am_string',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'pm_string',
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

        await queryRunner.createForeignKeys('Locale_Parameter', [
            new TableForeignKey({
                columnNames: ['locale_id'],
                referencedColumnNames: ['locale_id'],
                referencedTableName: 'locale_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['currency_code'],
                referencedColumnNames: ['currency_code'],
                referencedTableName: 'currency_master_i18n',
                onDelete: 'SET NULL'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Locale_Parameter', 'FK_Locale_Parameter_locale_id');
        await queryRunner.dropForeignKey('Locale_Parameter', 'FK_Locale_Parameter_user_id');
        await queryRunner.dropForeignKey('Locale_Parameter', 'FK_Locale_Parameter_currency_code');
        await queryRunner.dropTable('Locale_Parameter');
    }
}
