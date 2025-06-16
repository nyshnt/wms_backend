import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udescription_master20250610164447 implements MigrationInterface {
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
                name: 'description_master',
                columns: [
                    {
                        name: 'description_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'description_type',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'description_text',
                        type: 'varchar',
                        length: '4000',
                        isNullable: true,
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        console.log('Created description_master table');
        console.log('Note: Foreign key to locale_master was not created because the table does not exist yet.');
        console.log('You should create this foreign key in a future migration after creating the locale_master table.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('description_master');
    }
}
