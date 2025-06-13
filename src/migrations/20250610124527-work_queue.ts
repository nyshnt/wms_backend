import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwork_queue20250610124527 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'work_queue',
                columns: [
                    {
                        name: 'registration_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        const pickWorkHeaderTableExists = await queryRunner.hasTable('pick_work_header');
        if (pickWorkHeaderTableExists) {
            await queryRunner.createForeignKey(
                'work_queue',
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
        const table = await queryRunner.getTable('work_queue');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('work_queue', foreignKey);
            }
            await queryRunner.dropTable('work_queue');
        }
    }
}
