import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Urfid_reader20250610162942 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rfid_reader',
                columns: [
                    {
                        name: 'reader_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'device_code',
                        type: 'varchar',
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('rfid_reader', [
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
        await queryRunner.dropForeignKey('rfid_reader', 'FK_rfid_reader_device_code');
        await queryRunner.dropForeignKey('rfid_reader', 'FK_rfid_reader_warehouse_id');
        await queryRunner.dropTable('rfid_reader');
    }
}
