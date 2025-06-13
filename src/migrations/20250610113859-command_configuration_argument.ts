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

        // Check if command_configuration table exists before creating foreign key
        const commandConfigurationTableExists = await queryRunner.hasTable('command_configuration');
        if (commandConfigurationTableExists) {
            await queryRunner.createForeignKey(
                'command_configuration_argument',
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
        const table = await queryRunner.getTable('command_configuration_argument');
        const foreignKey = table?.foreignKeys.find(fk => 
            fk.columnNames.indexOf('command_configuration_id') !== -1
        );
        if (foreignKey) {
            await queryRunner.dropForeignKey('command_configuration_argument', foreignKey);
        }
        await queryRunner.dropTable('command_configuration_argument');
    }
}
