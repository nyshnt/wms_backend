import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uvoice_region20250611150953 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'voice_region',
                columns: [
                    {
                        name: 'region_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'voice_validation_function',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('voice_region',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('voice_region',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('voice_region',
            new TableForeignKey({
                columnNames: ['last_update_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('voice_region', 'FK_voice_region_warehouse_id');
        await queryRunner.dropForeignKey('voice_region', 'FK_voice_region_insert_user_id');
        await queryRunner.dropForeignKey('voice_region', 'FK_voice_region_last_update_user_id');
        await queryRunner.dropTable('voice_region');
    }
}
