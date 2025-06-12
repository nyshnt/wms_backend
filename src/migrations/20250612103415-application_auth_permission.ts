import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uapplication_auth_permission20250612103415 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Application_Auth_Permission',
                columns: [
                    {
                        name: 'permission_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'bit_position',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'permission_type_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Application_Auth_Permission');
    }
}
