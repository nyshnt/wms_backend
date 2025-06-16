import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uuser_favorite20250611165130 implements MigrationInterface {
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
                name: 'User_Favorite',
                columns: [
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'option_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'menu_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611165130-user_favorite.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('User_Favorite', 'FK_User_Favorite_user_id');
        await queryRunner.dropForeignKey('User_Favorite', 'FK_User_Favorite_option_name');
        await queryRunner.dropTable('User_Favorite');
    }
}
