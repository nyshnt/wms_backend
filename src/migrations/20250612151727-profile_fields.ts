import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uprofile_fields20250612151727 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'profile_fields',
                columns: [
                    {
                        name: 'application_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'form_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'profile_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
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

        // Composite foreign key to ProfileMaster
        await queryRunner.createForeignKey(
            'profile_fields',
            new TableForeignKey({
                columnNames: ['application_id', 'form_id', 'profile_name'],
                referencedColumnNames: ['application_id', 'form_id', 'profile_name'], // Assuming these form the composite primary key of profile_master
                referencedTableName: 'profile_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('profile_fields', 'FK_profile_fields_profile_master'); // Generic name for composite FK
        await queryRunner.dropTable('profile_fields');
    }
}