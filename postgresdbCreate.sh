#!/bin/bash

# Variables
DB_NAME="wmsbackend"
DB_USER="postgres"
DB_PASSWORD="postgres"

# Create the database
psql -U postgres -c "CREATE DATABASE $DB_NAME;"

# Create the user
psql -U postgres -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';"

# Grant privileges
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"

echo "Database $DB_NAME and user $DB_USER created with the specified privileges."