import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureplenishment_link20250610124829 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'replenishment_link',
                columns: [
                    {
                        name: 'replenishment_reference',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );

        const pickWorkHeaderTableExists = await queryRunner.hasTable('pick_work_header');
        if (pickWorkHeaderTableExists) {
            await queryRunner.createForeignKey(
                'replenishment_link',
                new TableForeignKey({
                    columnNames: ['work_reference'],
                    referencedColumnNames: ['work_reference'],
                    referencedTableName: 'pick_work_header',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for work_reference as the pick_work_header table does not exist yet.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('replenishment_link');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('replenishment_link', foreignKey);
            }
            await queryRunner.dropTable('replenishment_link');
        }
    }
}
