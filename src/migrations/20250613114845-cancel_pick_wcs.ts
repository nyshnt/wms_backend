import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucancel_pick_wcs20250613114845 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cancel_pick_wcs',
                columns: [
                    {
                        name: 'cancellation_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_cancel_pick_status',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'wcs_cancel_request_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'wcs_cancel_confirm_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'work_reference', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'work_reference_detail_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'cancel_pick_wcs',
            new TableForeignKey({
                columnNames: ['work_reference'],
                referencedColumnNames: ['work_reference'],
                referencedTableName: 'pick_work_header',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cancel_pick_wcs',
            new TableForeignKey({
                columnNames: ['work_reference_detail_id'],
                referencedColumnNames: ['work_reference_detail_id'],
                referencedTableName: 'pick_work_detail',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cancel_pick_wcs', 'FK_cancel_pick_wcs_work_reference');
        await queryRunner.dropForeignKey('cancel_pick_wcs', 'FK_cancel_pick_wcs_work_reference_detail_id');
        await queryRunner.dropTable('cancel_pick_wcs');
    }
}