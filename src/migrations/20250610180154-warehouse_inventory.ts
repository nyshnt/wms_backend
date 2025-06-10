import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwarehouse_inventory20250610180154 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wh_inv',
                columns: [
                    {
                        name: 'inventory_ID',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'load_level',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'exitpoint_type',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'exitpoint',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_registration',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'addition_date',
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
                    },
                    {
                        name: 'confirm_service_id',
                        type: 'varchar'
                    },
                    {
                        name: 'version',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'detailed_location',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_meter',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'insertion_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'last_update_id',
                        type: 'varchar',
                        length: '255'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('wh_inv',
            new TableForeignKey({
                columnNames: ['confirm_service_id'],
                referencedColumnNames: ['confirm_service_id'],
                referencedTableName: 'confirm_service',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wh_inv', 'FK_wh_inv_confirm_service');
        await queryRunner.dropTable('wh_inv');
    }
}
