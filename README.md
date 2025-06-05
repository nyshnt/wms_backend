# WMS Backend

A NestJS-based backend service with GraphQL API and PostgreSQL integration.

## Project Structure

```
wms-backend/
├── bin/                   # Shell scripts for automation
│   └── create_db_migration.sh  # Script to create migration files
├── src/
│   ├── config/             # Configuration files
│   │   └── config.ts      # Environment and app configuration
│   ├── graphql/           # GraphQL related files
│   │   ├── schema.gql     # Auto-generated GraphQL schema
│   │   ├── graphql.ts     # Generated TypeScript types
│   │   └── base.types.ts  # Base GraphQL types
│   ├── migrations/        # Database migrations
│   │   ├── migrate.ts     # Migration runner
│   │   └── 001-create-users.ts  # User collection migration
│   ├── models/            # Database models
│   │   └── user.model.ts  # User Mongoose model & GraphQL type
│   ├── modules/           # Feature modules
│   │   └── user/         # User module
│   │       ├── dto/      # Data Transfer Objects
│   │       │   └── create-user.input.ts  # User creation DTO
│   │       ├── user.module.ts   # User module definition
│   │       ├── user.resolver.ts # GraphQL resolvers
│   │       └── user.service.ts  # Business logic
│   ├── app.controller.ts  # App controller (if needed)
│   ├── app.service.ts     # App service (if needed)
│   ├── app.module.ts      # Main application module
│   └── main.ts           # Application entry point
├── test/                  # Test files
│   └── jest-e2e.json     # E2E test configuration
├── .env                   # Environment variables
├── .env.example          # Example environment variables
├── .eslintrc.js          # ESLint configuration
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── CONTRIBUTING.md       # Contribution guidelines
├── nest-cli.json        # NestJS CLI configuration
├── package.json         # Project dependencies and scripts
├── README.md           # Project documentation
├── tsconfig.json       # TypeScript configuration
└── tsconfig.build.json # TypeScript build configuration
```

## Module Structure

Each feature module in the `modules` directory is self-contained and includes:

1. **Module Definition** (`*.module.ts`)
   - Defines module dependencies
   - Configures providers
   - Sets up imports/exports

2. **Service** (`*.service.ts`)
   - Contains business logic
   - Handles data operations
   - Implements domain rules

3. **Resolver** (`*.resolver.ts`)
   - Defines GraphQL queries/mutations
   - Maps GraphQL operations to services
   - Handles GraphQL-specific logic

4. **DTOs** (`dto/*.ts`)
   - Defines data transfer objects
   - Implements input validation
   - Specifies GraphQL inputs

This modular architecture ensures:
- Clear separation of concerns
- Easy testing and maintenance
- Scalable codebase
- Module independence
- Better code organization

## Key Components

### Models
Models define both the MongoDB schema and GraphQL types. Located in `src/models/`.
Example: `user.model.ts` defines:
- Database schema using `@Prop()` decorators
- GraphQL type using `@Field()` decorators
- Document type for Mongoose

### DTOs (Data Transfer Objects)
DTOs handle input validation for GraphQL mutations and queries. Located in `src/modules/*/dto/`.
Example: `create-user.input.ts` includes:
- Input validation rules using class-validator
- GraphQL input type definition

### Modules
Each feature is organized into a module. Located in `src/modules/`.
Each module contains:
- Module definition (*.module.ts)
- Service layer (*.service.ts)
- GraphQL resolvers (*.resolver.ts)
- DTOs and other related files

### GraphQL
- Schema is automatically generated in `src/graphql/schema.gql`
- Playground available at http://localhost:3000/graphql when in development

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL (v14 or later)
- npm or yarn

## PostgreSQL Setup

1. Install PostgreSQL:
```bash
# macOS (using Homebrew)
brew install postgresql@14

# Start PostgreSQL service
brew services start postgresql@14
```

2. Create Database:
```bash
createdb wms
```

## Environment Setup

Create a `.env` file in the root directory:

```env
# App
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=wms
```

## Installation

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

## Database Migrations

### Migration Commands

```bash
# Create a new migration
./bin/create_db_migration.sh create-something
# Example: ./bin/create_db_migration.sh create-users

# Run pending migrations
npm run migration:up

# Revert last migration
npm run migration:down

# Show migration status
npm run migration:show
```

### Available Migrations

1. User Table Migration:
   - UUID primary key
   - Name and email fields
   - Password field (hashed)
   - Role enum (ADMIN, USER, MANAGER)
   - Active status
   - Timestamps

## GraphQL API

The GraphQL playground is available at `http://localhost:3000/graphql` in development mode.

### Queries

1. Get all users:
```graphql
query {
  users {
    id
    name
    email
    role
    is_active
    created_at
  }
}
```

2. Get user by ID:
```graphql
query {
  user(id: "user-uuid") {
    id
    name
    email
    role
    is_active
  }
}
```

### Mutations

1. Create user:
```graphql
mutation {
  createUser(input: {
    name: "John Doe"
    email: "john@example.com"
    password: "securepassword"
  }) {
    id
    name
    email
    role
    created_at
  }
}
```

## Project Organization

### Module Structure
Each feature module (e.g., User) contains:
- `entities/`: Database entities and GraphQL types
- `dto/`: Data Transfer Objects for input validation
- `*.module.ts`: Module definition and dependencies
- `*.service.ts`: Business logic
- `*.resolver.ts`: GraphQL resolvers

### Entity Structure
Entities extend the BaseEntity which provides:
- UUID primary key
- Created at timestamp
- Updated at timestamp
- Soft delete support

## Scripts

```bash
# Development
npm run start:dev

# Production build
npm run build
npm run start:prod

# Database migrations
npm run migration:create   # Create new migration
npm run migration:up      # Run migrations
npm run migration:down    # Revert last migration
npm run migration:show    # Show migration status

# Testing
npm run test             # Run unit tests
npm run test:e2e        # Run e2e tests
npm run test:cov        # Generate coverage report

# Code quality
npm run lint            # Run ESLint
npm run format          # Run Prettier
```

## Security

- Passwords are never exposed in GraphQL responses
- Email uniqueness is enforced at database level
- Input validation using class-validator
- Environment variables for sensitive data
- Role-based access control

## Error Handling

The application includes built-in error handling for:
- Database operations
- GraphQL operations
- Input validation
- Authentication/Authorization

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License.
