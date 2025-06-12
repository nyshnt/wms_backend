import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ulookup_configuration20250612105110 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Lookup_Configuration',
                columns: [
                    {
                        name: 'lookup_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'lookup_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'lookup_component',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'return_field',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Lookup_Configuration');
    }
}
