import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uclient_group_client_association20250612174737 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'client_group_client_association',
                columns: [
                    {
                        name: 'client_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
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
                        type: 'uuid', // Assuming uuid based on UserAuthentication.user_id type
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on UserAuthentication.user_id type
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'client_group_client_association',
            new TableForeignKey({
                columnNames: ['client_group_id'],
                referencedColumnNames: ['client_group_id'],
                referencedTableName: 'client_group',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'client_group_client_association',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'client_group_client_association',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'client_group_client_association',
            new TableForeignKey({
                columnNames: ['last_update_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('client_group_client_association', 'FK_client_group_client_association_client_group_id');
        await queryRunner.dropForeignKey('client_group_client_association', 'FK_client_group_client_association_client_id');
        await queryRunner.dropForeignKey('client_group_client_association', 'FK_client_group_client_association_insert_user_id');
        await queryRunner.dropForeignKey('client_group_client_association', 'FK_client_group_client_association_last_update_user_id');
        await queryRunner.dropTable('client_group_client_association');
    }
}