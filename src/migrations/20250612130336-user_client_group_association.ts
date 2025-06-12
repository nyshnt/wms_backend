import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uuser_client_group_association20250612130336 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user_client_group_association',
                columns: [
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_group_id',
                        type: 'varchar',
                        isPrimary: true
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
            'user_client_group_association',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'user_client_group_association',
            new TableForeignKey({
                columnNames: ['client_group_id'],
                referencedColumnNames: ['client_group_id'],
                referencedTableName: 'client_group',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'user_client_group_association',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'user_client_group_association',
            new TableForeignKey({
                columnNames: ['last_update_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('user_client_group_association', 'FK_user_client_group_association_user_id');
        await queryRunner.dropForeignKey('user_client_group_association', 'FK_user_client_group_association_client_group_id');
        await queryRunner.dropForeignKey('user_client_group_association', 'FK_user_client_group_association_insert_user_id');
        await queryRunner.dropForeignKey('user_client_group_association', 'FK_user_client_group_association_last_update_user_id');
        await queryRunner.dropTable('user_client_group_association');
    }
}