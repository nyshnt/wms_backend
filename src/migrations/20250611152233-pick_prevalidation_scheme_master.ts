import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_prevalidation_scheme_master20250611152233 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_prevalidation_scheme_master',
                columns: [
                    {
                        name: 'scheme_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
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

        await queryRunner.createForeignKey('pick_prevalidation_scheme_master',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('pick_prevalidation_scheme_master',
            new TableForeignKey({
                columnNames: ['last_update_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_prevalidation_scheme_master', 'FK_pick_prevalidation_scheme_master_insert_user_id');
        await queryRunner.dropForeignKey('pick_prevalidation_scheme_master', 'FK_pick_prevalidation_scheme_master_last_update_user_id');
        await queryRunner.dropTable('pick_prevalidation_scheme_master');
    }
}
