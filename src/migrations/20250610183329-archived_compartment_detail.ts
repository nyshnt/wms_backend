import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uarchived_compartment_detail20250610183329 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'arc_cmpdtl',
                columns: [
                    {
                        name: 'compartment_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'added_date',
                        type: 'date',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'lot_number',
                        type: 'varchar'
                    },
                    {
                        name: 'revision_level',
                        type: 'varchar'
                    },
                    {
                        name: 'origin_code',
                        type: 'varchar'
                    },
                    {
                        name: 'sub_number',
                        type: 'varchar'
                    },
                    {
                        name: 'inventory_detail_number',
                        type: 'varchar'
                    },
                    {
                        name: 'inventory_status',
                        type: 'varchar'
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('arc_cmpdtl',
            new TableForeignKey({
                columnNames: ['compartment_key', 'added_date'],
                referencedColumnNames: ['compartment_key', 'added_date'],
                referencedTableName: 'archived_compartment_header',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('arc_cmpdtl', 'FK_arc_cmpdtl_archived_compartment_header');
        await queryRunner.dropTable('arc_cmpdtl');
    }
}
