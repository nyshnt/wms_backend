import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwcs_pick_groups20250611154120 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wcs_pick_groups',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_type',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_groups',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('wcs_pick_groups', [
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['wcs_id'],
                referencedColumnNames: ['wcs_id'],
                referencedTableName: 'wcs_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_pick_groups', 'FK_wcs_pick_groups_warehouse_id');
        await queryRunner.dropForeignKey('wcs_pick_groups', 'FK_wcs_pick_groups_wcs_id');
        await queryRunner.dropTable('wcs_pick_groups');
    }
}
