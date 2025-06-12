import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udda_field_map20250612130947 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'dda_field_map',
                columns: [
                    {
                        name: 'dda_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'link_variable_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'map_variable_name',
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

        // Note: The following foreign keys reference 'dda_field'.
        // If 'dda_field' has a composite primary key of (dda_id, customer_level, variable_name),
        // consider consolidating these into a single composite foreign key for better schema integrity.
        await queryRunner.createForeignKey(
            'dda_field_map',
            new TableForeignKey({
                columnNames: ['dda_id'],
                referencedColumnNames: ['dda_id'], // Assuming 'dda_id' is a unique/primary key in dda_field
                referencedTableName: 'dda_field',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'dda_field_map',
            new TableForeignKey({
                columnNames: ['customer_level'],
                referencedColumnNames: ['customer_level'], // Assuming 'customer_level' is a unique/primary key in dda_field
                referencedTableName: 'dda_field',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'dda_field_map',
            new TableForeignKey({
                columnNames: ['variable_name'],
                referencedColumnNames: ['variable_name'], // Assuming 'variable_name' is a unique/primary key in dda_field
                referencedTableName: 'dda_field',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_field_map', 'FK_dda_field_map_dda_id');
        await queryRunner.dropForeignKey('dda_field_map', 'FK_dda_field_map_customer_level');
        await queryRunner.dropForeignKey('dda_field_map', 'FK_dda_field_map_variable_name');
        await queryRunner.dropTable('dda_field_map');
    }
}