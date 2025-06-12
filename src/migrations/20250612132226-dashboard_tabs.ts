import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udashboard_tabs20250612132226 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'dashboard_tabs',
                columns: [
                    {
                        name: 'tab_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'template_flag',
                        type: 'boolean',
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
        await queryRunner.dropTable('dashboard_tabs');
    }
}