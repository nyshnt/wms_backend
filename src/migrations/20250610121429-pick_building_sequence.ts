import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_building_sequence20250610121429 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_building_sequence',
                columns: [
                    {
                        name: 'building_id',
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
            'pick_building_sequence',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouses',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_building_sequence', 'FK_pick_building_sequence_warehouse_id');
        await queryRunner.dropTable('pick_building_sequence');
    }
}
