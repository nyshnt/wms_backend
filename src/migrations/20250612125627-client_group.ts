import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uclient_group20250612125627 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'client_group',
                columns: [
                    {
                        name: 'client_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'version_number',
                        type: 'int',
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
                        name: 'insert_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'client_group',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'client_group',
            new TableForeignKey({
                columnNames: ['last_update_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('client_group', 'FK_client_group_insert_user_id');
        await queryRunner.dropForeignKey('client_group', 'FK_client_group_last_update_user_id');
        await queryRunner.dropTable('client_group');
    }
}