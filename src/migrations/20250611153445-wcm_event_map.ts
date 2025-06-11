import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwcm_event_map20250611153445 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wcs_event_map',
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
                        name: 'event_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'direction',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'event_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('wcs_event_map',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('wcs_event_map',
            new TableForeignKey({
                columnNames: ['wcs_id'],
                referencedColumnNames: ['wcs_id'],
                referencedTableName: 'wcs_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_event_map', 'FK_wcs_event_map_warehouse_id');
        await queryRunner.dropForeignKey('wcs_event_map', 'FK_wcs_event_map_wcs_id');
        await queryRunner.dropTable('wcs_event_map');
    }
}
