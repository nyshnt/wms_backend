import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwarehouse_customer_master20250612161410 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'warehouse_customer_master',
                columns: [
                    {
                        name: 'customer_number',
                        type: 'varchar', // Assuming varchar based on CustomerMaster.customer_number type
                        isPrimary: true
                        // PrimaryGeneratedColumn('uuid') is omitted as it conflicts with JoinColumn for FK
                        // and type is set based on referencedColumnName for logical consistency.
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
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'warehouse_customer_master',
            new TableForeignKey({
                columnNames: ['customer_number'],
                referencedColumnNames: ['customer_number'], // Assuming 'customer_number' is unique/primary in 'customer_master'
                referencedTableName: 'customer_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'warehouse_customer_master',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'], // Assuming 'warehouse_id' is unique/primary in 'warehouse'
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'warehouse_customer_master',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'], // Assuming 'client_id' is unique/primary in 'client'
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('warehouse_customer_master', 'FK_warehouse_customer_master_customer_number');
        await queryRunner.dropForeignKey('warehouse_customer_master', 'FK_warehouse_customer_master_warehouse_id');
        await queryRunner.dropForeignKey('warehouse_customer_master', 'FK_warehouse_customer_master_client_id');
        await queryRunner.dropTable('warehouse_customer_master');
    }
}