import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_list_rule_group20250612174314 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_list_rule_group',
                columns: [
                    {
                        name: 'pick_list_rule_group_id',
                        type: 'uuid', // Assuming 'uuid' for PrimaryGeneratedColumn as per common practice
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'pick_list_rule_group_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'pick_list_rule_group',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'pick_list_rule_group',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_rule_group', 'FK_pick_list_rule_group_warehouse_id');
        await queryRunner.dropForeignKey('pick_list_rule_group', 'FK_pick_list_rule_group_client_id');
        await queryRunner.dropTable('pick_list_rule_group');
    }
}