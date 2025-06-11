import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucurrent_trailer_activity20250611150424 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'current_trailer_activity',
                columns: [
                    {
                        name: 'trailer_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'device_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('current_trailer_activity',
            new TableForeignKey({
                columnNames: ['trailer_id'],
                referencedColumnNames: ['trailer_id'],
                referencedTableName: 'trailer_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('current_trailer_activity',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('current_trailer_activity',
            new TableForeignKey({
                columnNames: ['device_code'],
                referencedColumnNames: ['device_code'],
                referencedTableName: 'device_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('current_trailer_activity',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('current_trailer_activity', 'FK_current_trailer_activity_trailer_id');
        await queryRunner.dropForeignKey('current_trailer_activity', 'FK_current_trailer_activity_user_id');
        await queryRunner.dropForeignKey('current_trailer_activity', 'FK_current_trailer_activity_device_code');
        await queryRunner.dropForeignKey('current_trailer_activity', 'FK_current_trailer_activity_warehouse_id');
        await queryRunner.dropTable('current_trailer_activity');
    }
}
