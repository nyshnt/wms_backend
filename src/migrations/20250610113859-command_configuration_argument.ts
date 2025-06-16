import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucommand_configuration_argument20250610113859 implements MigrationInterface {
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
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610113859-command_configuration_argument.ts. You should create these foreign keys when making APIs.');
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
