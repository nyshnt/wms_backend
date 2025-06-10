import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureplenishment_work20250610125217 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'replenishment_work',
                columns: [
                    {
                        name: 'replenishment_reference',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'picked_quantity',
                        type: 'int',
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                    },
                    {
                        name: 'origin_code',
                        type: 'varchar',
                    },
                    {
                        name: 'revision_level',
                        type: 'varchar',
                    },
                    {
                        name: 'lot_number',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('replenishment_work');
    }
}
