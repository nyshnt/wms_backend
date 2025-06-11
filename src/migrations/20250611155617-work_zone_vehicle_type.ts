import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwork_zone_vehicle_type20250611155617 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'work_zone_vehicle_type',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_zone_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'vehicle_type_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'max_devices',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'version_number',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('work_zone_vehicle_type', [
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'zone_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['work_zone_code'],
                referencedColumnNames: ['work_zone_code'],
                referencedTableName: 'zone_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['vehicle_type_id'],
                referencedColumnNames: ['vehicle_type_id'],
                referencedTableName: 'vehicle_type',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['last_update_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_warehouse_id');
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_work_zone_code');
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_vehicle_type_id');
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_insert_user_id');
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_last_update_user_id');
        await queryRunner.dropTable('work_zone_vehicle_type');
    }
}
