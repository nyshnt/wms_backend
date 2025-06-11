import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uparcel_shipper_rule20250611123220 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'parcel_shipper_rule',
                columns: [
                    {
                        name: 'rule_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'location_id',
                        type: 'varchar'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('parcel_shipper_rule',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('parcel_shipper_rule',
            new TableForeignKey({
                columnNames: ['location_id'],
                referencedColumnNames: ['storage_location'],
                referencedTableName: 'location_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('parcel_shipper_rule', 'FK_parcel_shipper_rule_warehouse');
        await queryRunner.dropForeignKey('parcel_shipper_rule', 'FK_parcel_shipper_rule_location_master');
        await queryRunner.dropTable('parcel_shipper_rule');
    }
}
