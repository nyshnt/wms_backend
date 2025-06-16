import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udda_child20250612130834 implements MigrationInterface {
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
                name: 'dda_child',
                columns: [
                    {
                        name: 'dda_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dda_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dda_child_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dda_child_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'child_fields',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'initial_visible_flag',
                        type: 'boolean',
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

        // Composite foreign key to DDAMaster
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130834-dda_child.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_child', 'FK_dda_child_dda_id_customer_level'); // Generic name for composite FK
        await queryRunner.dropTable('dda_child');
    }
}