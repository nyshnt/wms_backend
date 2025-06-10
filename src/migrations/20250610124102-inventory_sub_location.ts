import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uinventory_sub_location20250610124102 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'inventory_sub_location',
                columns: [
                    {
                        name: 'sub_location_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'sub_number',
                        type: 'varchar',
                        isPrimary: true,
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
                        name: 'lot_number',
                        type: 'varchar',
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('inventory_sub_location');
    }
}
