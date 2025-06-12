import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucustomer_warehouse_putaway_location20250612162152 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'customer_warehouse_putaway_location',
                columns: [
                    {
                        name: 'customer_number',
                        type: 'varchar', // Assuming varchar based on CustomerMaster.customer_number type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted as it conflicts with JoinColumn for FK.
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar', // Assuming varchar based on Warehouse.warehouse_id type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted.
                    },
                    {
                        name: 'client_id',
                        type: 'varchar', // Assuming varchar based on Client.client_id type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted.
                    },
                    {
                        name: 'sort_sequence',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'area_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'customer_warehouse_putaway_location',
            new TableForeignKey({
                columnNames: ['customer_number'],
                referencedColumnNames: ['customer_number'],
                referencedTableName: 'customer_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'customer_warehouse_putaway_location',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'customer_warehouse_putaway_location',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('customer_warehouse_putaway_location', 'FK_customer_warehouse_putaway_location_customer_number');
        await queryRunner.dropForeignKey('customer_warehouse_putaway_location', 'FK_customer_warehouse_putaway_location_warehouse_id');
        await queryRunner.dropForeignKey('customer_warehouse_putaway_location', 'FK_customer_warehouse_putaway_location_client_id');
        await queryRunner.dropTable('customer_warehouse_putaway_location');
    }
}