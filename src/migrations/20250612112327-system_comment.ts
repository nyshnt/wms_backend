import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Usystem_comment20250612112327 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'System_Comment',
                columns: [
                    {
                        name: 'system_object_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'system_object_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'comment_text',
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
        await queryRunner.dropTable('System_Comment');
    }
}
