import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_list_slot_load20250613113000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Pick_List_Slot_Load',
                columns: [
                    {
                        name: 'load_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'slot_load_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'asset_slot_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'Pick_List_Slot_Load',
            new TableForeignKey({
                columnNames: ['load_number'],
                referencedColumnNames: ['load_number'],
                referencedTableName: 'Inventory_Load_Asset_List_Picking',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'Pick_List_Slot_Load',
            new TableForeignKey({
                columnNames: ['asset_slot_id'],
                referencedColumnNames: ['slot_type_id'],
                referencedTableName: 'Pick_List_Asset_Slot_Definition',
                onDelete: 'SET NULL'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Pick_List_Slot_Load', 'FK_Pick_List_Slot_Load_load_number');
        await queryRunner.dropForeignKey('Pick_List_Slot_Load', 'FK_Pick_List_Slot_Load_asset_slot_id');
        await queryRunner.dropTable('Pick_List_Slot_Load');
    }
}
