import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucommand_configuration_argument20250610113859 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'command_configuration_argument',
                columns: [
                    {
                        name: 'command_configuration_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'command_configuration_argument',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'command_configuration_argument',
            new TableForeignKey({
                columnNames: ['command_configuration_id'],
                referencedColumnNames: ['command_configuration_id'],
                referencedTableName: 'command_configuration',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('command_configuration_argument', 'FK_command_configuration_argument_command_configuration_id');
        await queryRunner.dropTable('command_configuration_argument');
    }
}
