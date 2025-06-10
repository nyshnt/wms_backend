import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uconfirm_service_value20250610172837 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Confirm_Service_Value',
                columns: [
                    {
                        name: 'service_instance_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirm_value_variable_name',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirm_service_value',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirm_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'confirmation_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('Confirm_Service_Value', [
            new TableForeignKey({
                columnNames: ['service_instance_id'],
                referencedColumnNames: ['service_instance_id'],
                referencedTableName: 'service_instance',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['service_instance_id'],
                referencedColumnNames: ['service_instance_id'],
                referencedTableName: 'confirm_service_instance',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['confirm_service_id'],
                referencedColumnNames: ['confirm_service_id'],
                referencedTableName: 'confirm_service',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['confirm_service_id'],
                referencedColumnNames: ['confirm_service_id'],
                referencedTableName: 'confirm_non_inventory_service',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Confirm_Service_Value', 'FK_confirm_service_value_service_instance');
        await queryRunner.dropForeignKey('Confirm_Service_Value', 'FK_confirm_service_value_confirm_service_instance');
        await queryRunner.dropForeignKey('Confirm_Service_Value', 'FK_confirm_service_value_confirm_service');
        await queryRunner.dropForeignKey('Confirm_Service_Value', 'FK_confirm_service_value_confirm_non_inventory_service');
        await queryRunner.dropTable('Confirm_Service_Value');
    }
}
