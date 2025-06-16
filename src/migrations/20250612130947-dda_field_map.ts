import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udda_field_map20250612130947 implements MigrationInterface {
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
                name: 'dda_field_map',
                columns: [
                    {
                        name: 'dda_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'link_variable_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'map_variable_name',
                        type: 'varchar',
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

        // Note: The following foreign keys reference 'dda_field'.
        // If 'dda_field' has a composite primary key of (dda_id, customer_level, variable_name),
        // consider consolidating these into a single composite foreign key for better schema integrity.
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130947-dda_field_map.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130947-dda_field_map.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612130947-dda_field_map.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_field_map', 'FK_dda_field_map_dda_id');
        await queryRunner.dropForeignKey('dda_field_map', 'FK_dda_field_map_customer_level');
        await queryRunner.dropForeignKey('dda_field_map', 'FK_dda_field_map_variable_name');
        await queryRunner.dropTable('dda_field_map');
    }
}