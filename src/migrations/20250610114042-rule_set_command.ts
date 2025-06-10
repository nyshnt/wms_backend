import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Urule_set_command20250610114042 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rule_set_command',
                columns: [
                    {
                        name: 'rule_set',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'rule_sequence',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'command_configuration_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'rule_set_command',
            new TableForeignKey({
                columnNames: ['command_configuration_id'],
                referencedColumnNames: ['command_configuration_id'],
                referencedTableName: 'command_configuration',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('rule_set_command', 'FK_rule_set_command_command_configuration_id');
        await queryRunner.dropTable('rule_set_command');
    }
}
