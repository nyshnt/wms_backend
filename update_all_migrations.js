const fs = require('fs');
const path = require('path');

// Directory containing migration files
const migrationsDir = path.join(__dirname, 'src/migrations');

// Get all migration files
const migrationFiles = fs.readdirSync(migrationsDir)
  .filter(file => file.endsWith('.ts') && !file.includes('migrate.ts'));

console.log(`Found ${migrationFiles.length} migration files`);

// Process each migration file
migrationFiles.forEach(file => {
  const filePath = path.join(migrationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file contains table creation
  if (content.includes('createTable')) {
    // Add table existence check
    if (!content.includes('const tableExists = await queryRunner.hasTable')) {
      content = content.replace(
        /public async up\(queryRunner: QueryRunner\): Promise<void> {/,
        `public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(\`Table \${tableName} already exists, skipping creation\`);
            return;
        }
        
        try {`
      );
      
      // Add error handling and closing try-catch
      if (!content.includes('try {')) {
        content = content.replace(
          /await queryRunner\.createTable\([^;]+;/,
          `$&
          console.log(\`Created \${tableName} table\`);
        } catch (error) {
          console.error(\`Error creating table \${tableName}:\`, error);
          throw error;
        }`
        );
      }
    }
    
    // Remove foreign key creation
    if (content.includes('createForeignKey') || content.includes('createForeignKeys')) {
      content = content.replace(/await queryRunner\.createForeignKeys?\([^;]+;/gs, 
        `// Foreign key creation removed - will be added later when making APIs
        console.log('Note: Foreign keys were not created. You should create these foreign keys when making APIs.');`);
    }
    
    // Save the modified file
    fs.writeFileSync(filePath, content);
    console.log(`Modified ${file} - added table existence check and removed foreign key constraints`);
  }
});

console.log('All migration files processed');
