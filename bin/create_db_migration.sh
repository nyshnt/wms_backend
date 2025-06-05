#!/bin/bash

# Check if name provided
if [ -z "$1" ]
then
    echo "Please provide migration name"
    echo "Example: ./bin/create_db_migration.sh create-users"
    exit 1
fi

# Create timestamp and filename
TIMESTAMP=$(date +%Y%m%d%H%M%S)
MIGRATION_NAME=$(echo "$1" | sed -r 's/(^|-)([a-z])/\U\2/g')
FILE_NAME="src/migrations/${TIMESTAMP}-${1}.ts"

# Create migration file
echo "import { MigrationInterface, QueryRunner } from 'typeorm';

export class ${MIGRATION_NAME}${TIMESTAMP} implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add migration code here
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Add rollback code here
    }
}" > "$FILE_NAME"

echo "Created migration: $FILE_NAME"