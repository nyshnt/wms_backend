import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ushipment_time_slot20250613110159 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'shipment_time_slot',
                columns: [
                    {
                        name: 'time_slot_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'shipment_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on ShipmentHeader.shipment_id type
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'shipment_time_slot',
            new TableForeignKey({
                columnNames: ['shipment_id'],
                referencedColumnNames: ['shipment_id'],
                referencedTableName: 'shipment_header',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('shipment_time_slot', 'FK_shipment_time_slot_shipment_id');
        await queryRunner.dropTable('shipment_time_slot');
    }
}