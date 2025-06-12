import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upolicy_field20250612184142 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'policy_field',
                columns: [
                    {
                        name: 'policy_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'policy_field_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'field_alias',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'field_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'tooltip_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'policy_field',
            new TableForeignKey({
                columnNames: ['policy_id'],
                referencedColumnNames: ['policy_id'],
                referencedTableName: 'policy_information',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FK
            })
        );

        await queryRunner.createForeignKey(
            'policy_field',
            new TableForeignKey({
                columnNames: ['tooltip_mls_id'],
                referencedColumnNames: ['tooltip_mls_id'], // Assuming 'tooltip_mls_id' is unique/primary in multi_language_support_category
                referencedTableName: 'multi_language_support_category',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('policy_field', 'FK_policy_field_policy_id');
        await queryRunner.dropForeignKey('policy_field', 'FK_policy_field_tooltip_mls_id');
        await queryRunner.dropTable('policy_field');
    }
}