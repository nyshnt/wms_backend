import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uaddress_master_i18n20250613104352 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'address_master_i18n',
                columns: [
                    {
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'address_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'host_external_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_line_1',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_line_2',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_line_3',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'city', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'state_code', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'postal_code', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'country_name', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'address_master_i18n',
            new TableForeignKey({
                columnNames: ['locale_id'],
                referencedColumnNames: ['locale_id'],
                referencedTableName: 'locale_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        // Note: The following foreign keys reference single columns in 'city_postal_state_i18n'.
        // If 'city_postal_state_i18n' has a composite primary key, ensure these columns are unique
        // or consider a composite foreign key if the relationship involves the full primary key.
        await queryRunner.createForeignKey(
            'address_master_i18n',
            new TableForeignKey({
                columnNames: ['city'],
                referencedColumnNames: ['city'], // Assuming city is unique/primary in city_postal_state_i18n
                referencedTableName: 'city_postal_state_i18n',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'address_master_i18n',
            new TableForeignKey({
                columnNames: ['state_code'],
                referencedColumnNames: ['state_code'], // Assuming state_code is unique/primary in city_postal_state_i18n
                referencedTableName: 'city_postal_state_i18n',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'address_master_i18n',
            new TableForeignKey({
                columnNames: ['postal_code'],
                referencedColumnNames: ['postal_code'], // Assuming postal_code is unique/primary in city_postal_state_i18n
                referencedTableName: 'city_postal_state_i18n',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'address_master_i18n',
            new TableForeignKey({
                columnNames: ['country_name'],
                referencedColumnNames: ['country_name'], // Assuming country_name is unique/primary in country_master_i18n
                referencedTableName: 'country_master_i18n',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_locale_id');
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_city');
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_state_code');
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_postal_code');
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_country_name');
        await queryRunner.dropTable('address_master_i18n');
    }
}