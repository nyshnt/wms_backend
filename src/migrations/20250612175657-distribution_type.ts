import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udistribution_type20250612175657 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'distribution_type',
                columns: [
                    {
                        name: 'distribution_type',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'distribution_rule_set', // Column for foreign key
                        type: 'varchar', // Assuming varchar for rule_set
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'overage_rule_set', // Column for foreign key
                        type: 'varchar', // Assuming varchar for rule_set
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'distribution_type',
            new TableForeignKey({
                columnNames: ['distribution_rule_set'],
                referencedColumnNames: ['rule_set'], // Assuming rule_set is unique/primary in rule_set_command
                referencedTableName: 'rule_set_command',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'distribution_type',
            new TableForeignKey({
                columnNames: ['overage_rule_set'],
                referencedColumnNames: ['rule_set'], // Assuming rule_set is unique/primary in rule_set_command
                referencedTableName: 'rule_set_command',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('distribution_type', 'FK_distribution_type_distribution_rule_set');
        await queryRunner.dropForeignKey('distribution_type', 'FK_distribution_type_overage_rule_set');
        await queryRunner.dropTable('distribution_type');
    }
}