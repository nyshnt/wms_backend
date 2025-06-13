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

        const deviceMasterTableExists = await queryRunner.hasTable('device_master');
        if (deviceMasterTableExists) {
            console.log('Skipping foreign key creation for device_code as the device_master table does not have a unique constraint on device_code.');
        } else {
            console.log('Skipping foreign key creation for device_code as the device_master table does not exist yet.');
        }

        const warehouseTableExists = await queryRunner.hasTable('warehouse');
        if (warehouseTableExists) {
            await queryRunner.createForeignKey(
                'rfid_reader',
                new TableForeignKey({
                    columnNames: ['warehouse_id'],
                    referencedColumnNames: ['warehouse_id'],
                    referencedTableName: 'warehouse',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for warehouse_id as the warehouse table does not exist yet.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('rfid_reader');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('rfid_reader', foreignKey);
            }
            await queryRunner.dropTable('rfid_reader');
        }
    }
}
