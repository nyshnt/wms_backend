import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uslot_profile_item_set20250611131227 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'slot_profile_item_set',
                columns: [
                    {
                        name: 'item_set',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'profile_name',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('slot_profile_item_set',
            new TableForeignKey({
                columnNames: ['item_set'],
                referencedColumnNames: ['item_set'],
                referencedTableName: 'slot_item_set_item',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('slot_profile_item_set',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'slot_item_set_item',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('slot_profile_item_set', 'FK_slot_profile_item_set_item_set');
        await queryRunner.dropForeignKey('slot_profile_item_set', 'FK_slot_profile_item_set_warehouse_id');
        await queryRunner.dropTable('slot_profile_item_set');
    }
}
