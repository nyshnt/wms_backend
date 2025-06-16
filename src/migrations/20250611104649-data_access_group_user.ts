import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udata_access_group_user20250611104649 implements MigrationInterface {
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
                name: 'data_access_group_user',
                columns: [
                    {
                        name: 'access_group_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );
    }
    catch (error) {
        console.error('Error creating data_access_group_user table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('data_access_group_user');
    }
}
