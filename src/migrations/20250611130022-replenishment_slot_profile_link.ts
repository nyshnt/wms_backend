import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureplenishment_slot_profile_link20250611130022 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'replenishment_slot_profile_link',
                columns: [
                    {
                        name: 'replenishment_reference',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'slot_unit_of_measure',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'profile_name',
                        type: 'varchar'
                    },
                    {
                        name: 'picked_quantity',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('replenishment_slot_profile_link',
            new TableForeignKey({
                columnNames: ['replenishment_reference'],
                referencedColumnNames: ['replenishment_reference'],
                referencedTableName: 'replenishment_work',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('replenishment_slot_profile_link',
            new TableForeignKey({
                columnNames: ['profile_name'],
                referencedColumnNames: ['profile_name'],
                referencedTableName: 'slot_profile_item_set',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('replenishment_slot_profile_link', 'FK_replenishment_slot_profile_link_replenishment_reference');
        await queryRunner.dropForeignKey('replenishment_slot_profile_link', 'FK_replenishment_slot_profile_link_profile_name');
        await queryRunner.dropTable('replenishment_slot_profile_link');
    }
}
