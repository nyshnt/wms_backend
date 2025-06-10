import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udescription_master20250610164447 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'description_master',
                columns: [
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'column_value',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'locale_id',
                        type: 'varchar',
                    },
                    {
                        name: 'long_description',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'short_description',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('description_master', [
            new TableForeignKey({
                columnNames: ['locale_id'],
                referencedColumnNames: ['locale_id'],
                referencedTableName: 'locale_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('description_master', 'FK_description_master_locale_id');
        await queryRunner.dropForeignKey('description_master', 'FK_description_master_warehouse_id');
        await queryRunner.dropTable('description_master');
    }
}
