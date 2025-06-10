import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwarehouse_service20250610171617 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Warehouse_Service',
                columns: [
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'mixed_part_flag',
                        type: 'boolean',
                    },
                    {
                        name: 'special_service_code',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp',
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'service_enabled_flag',
                        type: 'boolean',
                    },
                    {
                        name: 'load_level',
                        type: 'varchar',
                        length: '255',
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('Warehouse_Service', [
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['service_id'],
                referencedTableName: 'service_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['confirm_service_id'],
                referencedColumnNames: ['confirm_service_id'],
                referencedTableName: 'confirm_service',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['service_instance_id'],
                referencedColumnNames: ['service_instance_id'],
                referencedTableName: 'service_instance',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Warehouse_Service', 'FK_Warehouse_Service_service_id');
        await queryRunner.dropForeignKey('Warehouse_Service', 'FK_Warehouse_Service_warehouse_id');
        await queryRunner.dropForeignKey('Warehouse_Service', 'FK_Warehouse_Service_confirm_service_id');
        await queryRunner.dropForeignKey('Warehouse_Service', 'FK_Warehouse_Service_service_instance_id');
        await queryRunner.dropTable('Warehouse_Service');
    }
}
