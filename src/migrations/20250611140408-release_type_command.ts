import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Urelease_type_command20250611140408 implements MigrationInterface {
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
                name: 'release_type_command',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'release_type_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'source_area_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'release_command',
                        type: 'varchar'
                    },
                    {
                        name: 'extra_arguments',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611140408-release_type_command.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611140408-release_type_command.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('release_type_command', 'FK_release_type_command_warehouse_id');
        await queryRunner.dropForeignKey('release_type_command', 'FK_release_type_command_source_area_code');
        await queryRunner.dropTable('release_type_command');
    }
}
