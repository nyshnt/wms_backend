import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uarchived_component_shipment20250610182835 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'arc_cmp_shipment',
                columns: [
                    {
                        name: 'compartment_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'order_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'order_line_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'order_subline_number',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('arc_cmp_shipment',
            new TableForeignKey({
                columnNames: ['compartment_key'],
                referencedColumnNames: ['compartment_key'],
                referencedTableName: 'archived_compartment_header',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('arc_cmp_shipment', 'FK_arc_cmp_shipment_archived_compartment_header');
        await queryRunner.dropTable('arc_cmp_shipment');
    }
}
