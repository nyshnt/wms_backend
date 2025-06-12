import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uage_profile20250612180625 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'age_profile',
                columns: [
                    {
                        name: 'age_profile_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'age_profile',
            new TableForeignKey({
                columnNames: ['inventory_status'],
                referencedColumnNames: ['inventory_status'], // Assuming inventory_status is unique/primary in inventory_status
                referencedTableName: 'inventory_status',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('age_profile', 'FK_age_profile_inventory_status');
        await queryRunner.dropTable('age_profile');
    }
}