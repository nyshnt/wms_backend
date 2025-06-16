import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udda_filter_group20250612130519 implements MigrationInterface {
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
                name: 'dda_filter_group',
                columns: [
                    {
                        name: 'filter_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'group_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'attach_location',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'attach_offset',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'parent_group_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'attach_group_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Note: The following foreign keys for parent_group_id and attach_group_id
        // reference a single column in a table that has a composite primary key.
        // Ensure that 'filter_group_id' alone is a unique key in 'dda_filter_group'
        // or consider defining a composite foreign key if required.
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130519-dda_filter_group.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130519-dda_filter_group.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130519-dda_filter_group.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_filter_group', 'FK_dda_filter_group_parent_group_id');
        await queryRunner.dropForeignKey('dda_filter_group', 'FK_dda_filter_group_attach_group_id');
        await queryRunner.dropForeignKey('dda_filter_group', 'FK_dda_filter_group_modification_user_id');
        await queryRunner.dropTable('dda_filter_group');
    }
}