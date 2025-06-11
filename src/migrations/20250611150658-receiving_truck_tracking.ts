import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureceiving_truck_tracking20250611150658 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'receiving_truck_tracking',
                columns: [
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('receiving_truck_tracking',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('receiving_truck_tracking', 'FK_receiving_truck_tracking_warehouse_id');
        await queryRunner.dropTable('receiving_truck_tracking');
    }
}
