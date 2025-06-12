import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upolicy_area20250612112134 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Policy_Area',
                columns: [
                    {
                        name: 'policy_area_id',
                        type: 'varchar',
                        isPrimary: true
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
        await queryRunner.dropTable('Policy_Area');
    }
}
