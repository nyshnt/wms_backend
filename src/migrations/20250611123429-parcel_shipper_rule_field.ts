import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uparcel_shipper_rule_field20250611123429 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'parcel_shipper_rule_field',
                columns: [
                    {
                        name: 'rule_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('parcel_shipper_rule_field',
            new TableForeignKey({
                columnNames: ['rule_id'],
                referencedColumnNames: ['rule_id'],
                referencedTableName: 'parcel_shipper_rule',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('parcel_shipper_rule_field', 'FK_parcel_shipper_rule_field_parcel_shipper_rule');
        await queryRunner.dropTable('parcel_shipper_rule_field');
    }
}
