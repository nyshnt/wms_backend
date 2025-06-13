import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uproduction_line_master20250610123524 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('production_line_master');
        if (!tableExists) {
            await queryRunner.createTable(
                new Table({
                    name: 'production_line_master',
                    columns: [
                        {
                            name: 'production_line',
                            type: 'varchar',
                            isPrimary: true,
                        },
                        {
                            name: 'warehouse_id',
                            type: 'uuid',
                            isPrimary: true,
                        },
                        {
                            name: 'exclusion_flag',
                            type: 'boolean',
                            isNullable: true,
                        },
                        {
                            name: 'production_care',
                            type: 'varchar',
                            length: '255',
                            isNullable: true,
                        },
                    ],
                }),
                true,
            );

            const warehousesTableExists = await queryRunner.hasTable('warehouses');
            if (warehousesTableExists) {
                await queryRunner.createForeignKey(
                    'production_line_master',
                    new TableForeignKey({
                        columnNames: ['warehouse_id'],
                        referencedColumnNames: ['warehouse_id'],
                        referencedTableName: 'warehouses',
                        onDelete: 'CASCADE',
                    }),
                );
            } else {
                console.log('Skipping foreign key creation for warehouse_id as the warehouses table does not exist yet.');
            }
        } else {
            console.log('Skipping table creation as the production_line_master table already exists.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('production_line_master');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('production_line_master', foreignKey);
            }
            await queryRunner.dropTable('production_line_master');
        }
    }
}
