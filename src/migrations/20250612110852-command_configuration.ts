import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucommand_configuration20250612110852 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Command_Configuration',
                columns: [
                    {
                        name: 'command_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'syntax',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'modification_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'command_configuration_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ],
                indices: [
                    {
                        name: 'IDX_command_id',
                        columnNames: ['command_id'],
                        isUnique: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('Command_Configuration',
            new TableForeignKey({
                columnNames: ['modification_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Command_Configuration', 'FK_Command_Configuration_modification_user_id');
        await queryRunner.dropTable('Command_Configuration');
    }
}
