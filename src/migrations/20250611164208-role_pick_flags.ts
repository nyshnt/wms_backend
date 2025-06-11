import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Urole_pick_flags20250611164208 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'role_pick_flags',
                columns: [
                    {
                        name: 'role_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'load_division_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'lot_tracking_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'super_lot_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'revision_level_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'origin_code_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'supplier_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'date_in_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'sub_inventory_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'load_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'part_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'location_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'quantity_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'catch_weight_qty_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'manufacture_date_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'expiration_date_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'return_reason_id_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'version_number',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('role_pick_flags',
            new TableForeignKey({
                columnNames: ['role_id'],
                referencedColumnNames: ['role_id'],
                referencedTableName: 'application_authorization_role_rf_pick_validation',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('role_pick_flags', 'FK_role_pick_flags_role_id');
        await queryRunner.dropTable('role_pick_flags');
    }
}
