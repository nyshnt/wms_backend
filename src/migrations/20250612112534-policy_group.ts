import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upolicy_group20250612112534 implements MigrationInterface {
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
                name: 'Policy_Group',
                columns: [
                    {
                        name: 'policy_area_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'policy_child_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'policy_child_type',
                        type: 'varchar',
                        isPrimary: true
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
      console.log('Note: Foreign keys were not created for 20250612112534-policy_group.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Policy_Group', 'FK_Policy_Group_policy_area_id');
        await queryRunner.dropTable('Policy_Group');
    }
}
