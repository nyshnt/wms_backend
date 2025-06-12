import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucurrency_conversion_rate20250612120324 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Currency_Conversion_Rate',
                columns: [
                    {
                        name: 'currency_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'effective_date',
                        type: 'date',
                        isPrimary: true
                    },
                    {
                        name: 'conversion_rate',
                        type: 'decimal',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('Currency_Conversion_Rate',
            new TableForeignKey({
                columnNames: ['currency_code'],
                referencedColumnNames: ['currency_code'],
                referencedTableName: 'currency_master_i18n',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Currency_Conversion_Rate', 'FK_Currency_Conversion_Rate_currency_code');
        await queryRunner.dropTable('Currency_Conversion_Rate');
    }
}
