import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upolicy_group20250612112534 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Policy_Group',
                columns: [
                    {
                        name: 'policy_area_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'policy_child_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'policy_child_type',
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

        await queryRunner.createForeignKey('Policy_Group',
            new TableForeignKey({
                columnNames: ['policy_area_id'],
                referencedColumnNames: ['policy_area_id'],
                referencedTableName: 'policy_area',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Policy_Group', 'FK_Policy_Group_policy_area_id');
        await queryRunner.dropTable('Policy_Group');
    }
}
