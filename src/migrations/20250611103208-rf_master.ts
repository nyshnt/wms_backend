import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Urf_master20250611103208 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rf_master',
                columns: [
                    {
                        name: 'device_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'vehicle_type',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('rf_master',
            new TableForeignKey({
                columnNames: ['vehicle_type'],
                referencedColumnNames: ['vehicle_type_id'],
                referencedTableName: 'vehicle_type',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('rf_master', 'FK_rf_master_vehicle_type');
        await queryRunner.dropTable('rf_master');
    }
}
