import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upart_master20250610150000 implements MigrationInterface {
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
                name: 'part_master',
                columns: [
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'attribute_string_1',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'attribute_string_10',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'attribute_integer_1',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'attribute_integer_5',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'attribute_float_1',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'attribute_float_3',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'attribute_date_1',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'attribute_date_2',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'part_master_column_1',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'display_part_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'alternate_part_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        console.log('Created part_master table');
        console.log('Note: Foreign keys were not created because the referenced tables may not exist yet.');
        console.log('You should create these foreign keys in a future migration after creating all required tables.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('part_master');
    }
}
