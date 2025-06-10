import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uconfirm_service_background20250610173119 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Confirm_Service_Background',
                columns: [
                    {
                        name: 'service_instance_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'post_confirmation_value_command',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('Confirm_Service_Background',
            new TableForeignKey({
                columnNames: ['service_instance_id'],
                referencedColumnNames: ['service_instance_id'],
                referencedTableName: 'service_instance',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Confirm_Service_Background', 'FK_confirm_service_background_service_instance');
        await queryRunner.dropTable('Confirm_Service_Background');
    }
}
