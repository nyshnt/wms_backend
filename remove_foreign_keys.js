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
  
  // Check if the file contains foreign key creation
  if (content.includes('createForeignKey') || content.includes('createForeignKeys')) {
    // Replace foreign key creation with comments
    content = content.replace(/await queryRunner\.createForeignKeys?\([^;]+;/gs, 
      `// Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for ${file}. You should create these foreign keys when making APIs.');`);
    
    // Save the modified file
    fs.writeFileSync(filePath, content);
    console.log(`Modified ${file} - removed foreign key constraints`);
  }
});

console.log('All migration files processed');
