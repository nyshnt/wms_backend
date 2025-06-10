import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Utrailer_activity20250610133454 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'trailer_activity',
                columns: [
                    {
                        name: 'row_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'asset_tag',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'trailer_activity_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'trailer_id',
                        type: 'varchar',
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                    },
                    {
                        name: 'trailer_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('trailer_activity', [
            new TableForeignKey({
                columnNames: ['trailer_id'],
                referencedColumnNames: ['trailer_id'],
                referencedTableName: 'trailer_master',
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
        await queryRunner.dropForeignKey('trailer_activity', 'FK_trailer_activity_trailer_id');
        await queryRunner.dropForeignKey('trailer_activity', 'FK_trailer_activity_warehouse_id');
        await queryRunner.dropTable('trailer_activity');
    }
}
