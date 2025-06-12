import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ustate_master_i18n20250612115937 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'State_Master_I18N',
                columns: [
                    {
                        name: 'country_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'state_code',
                        type: 'varchar',
                        isPrimary: true
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

        await queryRunner.createForeignKey('State_Master_I18N',
            new TableForeignKey({
                columnNames: ['country_name'],
                referencedColumnNames: ['country_name'],
                referencedTableName: 'country_master_i18n',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('State_Master_I18N', 'FK_State_Master_I18N_country_name');
        await queryRunner.dropTable('State_Master_I18N');
    }
}
