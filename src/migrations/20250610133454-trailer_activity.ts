import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Utrailer_activity20250610133454 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'trailer_activity',
                columns: [
                    {
                        name: 'row_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'asset_tag',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'trailer_activity_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'trailer_id',
                        type: 'varchar',
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                    },
                    {
                        name: 'trailer_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        const trailerMasterTableExists = await queryRunner.hasTable('trailer_master');
        if (trailerMasterTableExists) {
            await queryRunner.createForeignKey(
                'trailer_activity',
                new TableForeignKey({
                    columnNames: ['trailer_id'],
                    referencedColumnNames: ['trailer_id'],
                    referencedTableName: 'trailer_master',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for trailer_id as the trailer_master table does not exist yet.');
        }

        const warehouseTableExists = await queryRunner.hasTable('warehouse');
        if (warehouseTableExists) {
            await queryRunner.createForeignKey(
                'trailer_activity',
                new TableForeignKey({
                    columnNames: ['warehouse_id'],
                    referencedColumnNames: ['warehouse_id'],
                    referencedTableName: 'warehouse',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for warehouse_id as the warehouse table does not exist yet.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('trailer_activity');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('trailer_activity', foreignKey);
            }
            await queryRunner.dropTable('trailer_activity');
        }
    }
}
