import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_movement20250610133311 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_movement',
                columns: [
                    {
                        name: 'combination_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'segment_number',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'storage_location',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        const locationMasterTableExists = await queryRunner.hasTable('location_master');
        if (locationMasterTableExists) {
            await queryRunner.createForeignKey(
                'pick_movement',
                new TableForeignKey({
                    columnNames: ['storage_location'],
                    referencedColumnNames: ['storage_location'],
                    referencedTableName: 'location_master',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for storage_location as the location_master table does not exist yet.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('pick_movement');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('pick_movement', foreignKey);
            }
            await queryRunner.dropTable('pick_movement');
        }
    }
}
