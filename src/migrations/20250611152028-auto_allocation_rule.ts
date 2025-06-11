import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uauto_allocation_rule20250611152028 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'auto_allocation_rule',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'auto_allocation_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'auto_allocation_method',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'rule_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'time_in_minutes',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'date_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
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

        await queryRunner.createForeignKey('auto_allocation_rule',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('auto_allocation_rule',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('auto_allocation_rule',
            new TableForeignKey({
                columnNames: ['last_update_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('auto_allocation_rule', 'FK_auto_allocation_rule_warehouse_id');
        await queryRunner.dropForeignKey('auto_allocation_rule', 'FK_auto_allocation_rule_insert_user_id');
        await queryRunner.dropForeignKey('auto_allocation_rule', 'FK_auto_allocation_rule_last_update_user_id');
        await queryRunner.dropTable('auto_allocation_rule');
    }
}
