import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucriteria_master20250612133730 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'criteria_master',
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
                        name: 'criteria_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'criteria_value',
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

        // Composite foreign key to ProfileMaster
        await queryRunner.createForeignKey(
            'criteria_master',
            new TableForeignKey({
                columnNames: ['application_id', 'form_id', 'profile_name'],
                referencedColumnNames: ['application_id', 'form_id', 'profile_name'], // Assuming these form the composite primary key of profile_master
                referencedTableName: 'profile_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('criteria_master', 'FK_criteria_master_profile_master'); // Generic name for composite FK
        await queryRunner.dropTable('criteria_master');
    }
}