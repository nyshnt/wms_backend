import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ustorage_building_sequence20250610115257 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'storage_building_sequence',
                columns: [
                    {
                        name: 'destination_building_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'storage_building_sequence',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouses',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('storage_building_sequence', 'FK_storage_building_sequence_warehouse_id');
        await queryRunner.dropTable('storage_building_sequence');
    }
}
