import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucity_postal_state_i8n20250612115018 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'City_Postal_State_I18N',
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
                        name: 'city',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'postal_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'latitude',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'longitude',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'invalid_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'invalid_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'gmt_offset',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'dst_flag',
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

        await queryRunner.createForeignKeys('City_Postal_State_I18N', [
            new TableForeignKey({
                columnNames: ['country_name'],
                referencedColumnNames: ['country_name'],
                referencedTableName: 'country_master_i18n',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['state_code'],
                referencedColumnNames: ['state_code'],
                referencedTableName: 'state_master_i18n',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('City_Postal_State_I18N', 'FK_City_Postal_State_I18N_country_name');
        await queryRunner.dropForeignKey('City_Postal_State_I18N', 'FK_City_Postal_State_I18N_state_code');
        await queryRunner.dropTable('City_Postal_State_I18N');
    }
}
