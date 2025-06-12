import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uinventory_status_role20250612183309 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'inventory_status_role',
                columns: [
                    {
                        name: 'inventory_status_role_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'role_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'from_inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'to_inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'inventory_status_role',
            new TableForeignKey({
                columnNames: ['role_id'],
                referencedColumnNames: ['role_id'],
                referencedTableName: 'application_authorization_role',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'inventory_status_role',
            new TableForeignKey({
                columnNames: ['from_inventory_status'],
                referencedColumnNames: ['inventory_status_code'], // Referenced column is inventory_status_code in InventoryStatusMaster
                referencedTableName: 'inventory_status_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'inventory_status_role',
            new TableForeignKey({
                columnNames: ['to_inventory_status'],
                referencedColumnNames: ['inventory_status_code'], // Referenced column is inventory_status_code in InventoryStatusMaster
                referencedTableName: 'inventory_status_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'inventory_status_role',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'inventory_status_role',
            new TableForeignKey({
                columnNames: ['modification_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_role_id');
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_from_inventory_status');
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_to_inventory_status');
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_insert_user_id');
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_modification_user_id');
        await queryRunner.dropTable('inventory_status_role');
    }
}