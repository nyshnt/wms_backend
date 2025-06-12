import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucustomer_warehouse_putaway_location_field20250612162521 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'customer_warehouse_putaway_location_field',
                columns: [
                    {
                        name: 'customer_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int', // Assuming 'Number' maps to 'int' for primary column
                        isPrimary: true
                    },
                    {
                        name: 'area_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isNullable: false
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Composite foreign key to CustomerWarehousePutawayLocation
        await queryRunner.createForeignKey(
            'customer_warehouse_putaway_location_field',
            new TableForeignKey({
                columnNames: ['customer_number', 'warehouse_id', 'client_id', 'sort_sequence', 'area_code'],
                referencedColumnNames: ['customer_number', 'warehouse_id', 'client_id', 'sort_sequence', 'area_code'], // Assuming these form the composite primary key
                referencedTableName: 'customer_warehouse_putaway_location',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('customer_warehouse_putaway_location_field', 'FK_customer_warehouse_putaway_location_field_composite'); // Generic name for composite FK
        await queryRunner.dropTable('customer_warehouse_putaway_location_field');
    }
}