import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uclient_group_client_association20250612174737 implements MigrationInterface {
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
                name: 'client_group_client_association',
                columns: [
                    {
                        name: 'client_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
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
                        type: 'uuid', // Assuming uuid based on UserAuthentication.user_id type
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on UserAuthentication.user_id type
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174737-client_group_client_association.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174737-client_group_client_association.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174737-client_group_client_association.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174737-client_group_client_association.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('client_group_client_association', 'FK_client_group_client_association_client_group_id');
        await queryRunner.dropForeignKey('client_group_client_association', 'FK_client_group_client_association_client_id');
        await queryRunner.dropForeignKey('client_group_client_association', 'FK_client_group_client_association_insert_user_id');
        await queryRunner.dropForeignKey('client_group_client_association', 'FK_client_group_client_association_last_update_user_id');
        await queryRunner.dropTable('client_group_client_association');
    }
}