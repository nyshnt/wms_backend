import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_list_rule_group20250612174314 implements MigrationInterface {
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
                name: 'pick_list_rule_group',
                columns: [
                    {
                        name: 'pick_list_rule_group_id',
                        type: 'uuid', // Assuming 'uuid' for PrimaryGeneratedColumn as per common practice
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'pick_list_rule_group_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174314-pick_list_rule_group.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174314-pick_list_rule_group.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_rule_group', 'FK_pick_list_rule_group_warehouse_id');
        await queryRunner.dropForeignKey('pick_list_rule_group', 'FK_pick_list_rule_group_client_id');
        await queryRunner.dropTable('pick_list_rule_group');
    }
}