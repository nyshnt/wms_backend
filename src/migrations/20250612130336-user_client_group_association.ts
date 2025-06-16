import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uuser_client_group_association20250612130336 implements MigrationInterface {
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
                name: 'user_client_group_association',
                columns: [
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'version_number',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130336-user_client_group_association.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130336-user_client_group_association.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130336-user_client_group_association.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130336-user_client_group_association.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('user_client_group_association', 'FK_user_client_group_association_user_id');
        await queryRunner.dropForeignKey('user_client_group_association', 'FK_user_client_group_association_client_group_id');
        await queryRunner.dropForeignKey('user_client_group_association', 'FK_user_client_group_association_insert_user_id');
        await queryRunner.dropForeignKey('user_client_group_association', 'FK_user_client_group_association_last_update_user_id');
        await queryRunner.dropTable('user_client_group_association');
    }
}