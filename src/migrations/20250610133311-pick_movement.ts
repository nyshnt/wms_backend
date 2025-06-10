import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_movement20250610133311 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_movement',
                columns: [
                    {
                        name: 'combination_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'segment_number',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'storage_location',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'pick_movement',
            new TableForeignKey({
                columnNames: ['storage_location'],
                referencedColumnNames: ['storage_location'],
                referencedTableName: 'location_master',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_movement', 'FK_pick_movement_storage_location');
        await queryRunner.dropTable('pick_movement');
    }
}
