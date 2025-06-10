import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Usupplier_master20250610123850 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'supplier_master',
                columns: [
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'address_id',
                        type: 'varchar',
                    },
                    {
                        name: 'tracking_consignment_code',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('supplier_master');
    }
}
