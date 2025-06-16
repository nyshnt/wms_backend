import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucode_master20250610170858 implements MigrationInterface {
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
                name: 'Code_Master',
                columns: [
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'code_value',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'radio_figure',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'image_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Code_Master');
    }
}
