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

        // Check if command_configuration table exists before creating foreign key
        const commandConfigurationTableExists = await queryRunner.hasTable('command_configuration');
        if (commandConfigurationTableExists) {
            await queryRunner.createForeignKey(
                'rule_set_command',
                new TableForeignKey({
                    columnNames: ['command_configuration_id'],
                    referencedColumnNames: ['command_configuration_id'],
                    referencedTableName: 'command_configuration',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for command_configuration_id as the command_configuration table does not exist yet.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('rule_set_command');
        const foreignKey = table?.foreignKeys.find(fk => 
            fk.columnNames.indexOf('command_configuration_id') !== -1
        );
        if (foreignKey) {
            await queryRunner.dropForeignKey('rule_set_command', foreignKey);
        }
        await queryRunner.dropTable('rule_set_command');
    }
}
