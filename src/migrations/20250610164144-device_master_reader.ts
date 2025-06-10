import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udevice_master_reader20250610164144 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'device_master_reader',
                columns: [
                    {
                        name: 'reader_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'device_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('device_master_reader', [
            new TableForeignKey({
                columnNames: ['reader_id'],
                referencedColumnNames: ['reader_id'],
                referencedTableName: 'rfid_reader',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['device_code'],
                referencedColumnNames: ['device_code'],
                referencedTableName: 'device_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('device_master_reader', 'FK_device_master_reader_reader_id');
        await queryRunner.dropForeignKey('device_master_reader', 'FK_device_master_reader_device_code');
        await queryRunner.dropForeignKey('device_master_reader', 'FK_device_master_reader_warehouse_id');
        await queryRunner.dropTable('device_master_reader');
    }
}
