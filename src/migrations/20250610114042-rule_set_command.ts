import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Urule_set_command20250610114042 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
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
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610114042-rule_set_command.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for command_configuration_id as the command_configuration table does not exist yet.');
        }
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
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
