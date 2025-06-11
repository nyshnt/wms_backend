import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Urf_terminal_master20250611103502 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rf_terminal_master',
                columns: [
                    {
                        name: 'RF_vendor_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'terminal_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'device_code',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('rf_terminal_master',
            new TableForeignKey({
                columnNames: ['RF_vendor_name'],
                referencedColumnNames: ['RF_vendor_name'],
                referencedTableName: 'rf_vendor_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('rf_terminal_master',
            new TableForeignKey({
                columnNames: ['device_code'],
                referencedColumnNames: ['device_code'],
                referencedTableName: 'device_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('rf_terminal_master', 'FK_rf_terminal_master_RF_vendor_master');
        await queryRunner.dropForeignKey('rf_terminal_master', 'FK_rf_terminal_master_device_master');
        await queryRunner.dropTable('rf_terminal_master');
    }
}
