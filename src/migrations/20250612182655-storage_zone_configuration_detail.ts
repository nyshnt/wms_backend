import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ustorage_zone_configuration_detail20250612182655 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'storage_zone_configuration_detail',
                columns: [
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'insertion_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'insertion_user_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'storage_zone_configuration_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for storage_zone_configuration_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'storage_zone_configuration_detail',
            new TableForeignKey({
                columnNames: ['storage_zone_configuration_id'],
                referencedColumnNames: ['storage_zone_configuration_id'],
                referencedTableName: 'storage_zone_configuration_header',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('storage_zone_configuration_detail', 'FK_storage_zone_configuration_detail_storage_zone_configuration_id');
        await queryRunner.dropTable('storage_zone_configuration_detail');
    }
}