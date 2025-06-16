import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ualternate_part_master20250610160001 implements MigrationInterface {
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
                name: 'alternate_part_master',
                columns: [
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'alternate_part_type',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'alternate_part_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        console.log('Created alternate_part_master table');
        console.log('Note: Foreign keys to part_master were not created because the table does not exist yet.');
        console.log('You should create these foreign keys in a future migration after creating the part_master table.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('alternate_part_master');
    }
}
