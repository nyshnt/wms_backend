# Contributing to WMS Backend

We love your input! We want to make contributing to WMS Backend as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Project Setup for Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wms-backend.git
cd wms-backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your local settings
```

4. Start MongoDB:
```bash
# Make sure MongoDB is running locally or update MONGODB_URI in .env
```

5. Run migrations:
```bash
npm run migrate:up
```

6. Start development server:
```bash
npm run start:dev
```

## Code Style Guidelines

### TypeScript

- Use TypeScript for all files
- Follow the existing code style
- Use interfaces for type definitions
- Use enums for fixed values
- Use meaningful variable names

### GraphQL

- Use descriptive names for queries and mutations
- Include proper input validation
- Document all fields
- Handle errors appropriately

### Database

- Use Mongoose schemas
- Include proper indexes
- Handle database operations in services
- Use transactions where necessary

### Example Patterns

1. **Creating a New Module:**
```typescript
// module-name.module.ts
@Module({
  imports: [],
  providers: [ServiceName],
  exports: [ServiceName]
})
export class ModuleNameModule {}
```

2. **Service Pattern:**
```typescript
// service-name.service.ts
@Injectable()
export class ServiceName {
  constructor(
    @InjectModel(Model.name) private model: Model<ModelDocument>
  ) {}

  async findOne(): Promise<Type> {
    // Implementation
  }
}
```

3. **Resolver Pattern:**
```typescript
// resolver-name.resolver.ts
@Resolver(() => Type)
export class ResolverName {
  constructor(private service: ServiceName) {}

  @Query(() => Type)
  async queryName(): Promise<Type> {
    // Implementation
  }
}
```

## Testing

### Unit Tests

```bash
# Run unit tests
npm run test

# Run specific test file
npm run test -- path/to/test-file.spec.ts
```

### E2E Tests

```bash
# Run e2e tests
npm run test:e2e
```

### Test Coverage

```bash
# Generate test coverage report
npm run test:cov
```

## Documentation

### Code Documentation

- Use JSDoc comments for functions and classes
- Document complex logic
- Include examples where helpful

Example:
```typescript
/**
 * Creates a new user in the system
 * @param {CreateUserInput} input - User creation data
 * @returns {Promise<User>} Created user
 * @throws {ConflictException} If email already exists
 */
async createUser(input: CreateUserInput): Promise<User> {
  // Implementation
}
```

### API Documentation

- Keep GraphQL schema up to date
- Document all queries and mutations
- Include example usage

## Commit Messages

Format: `type(scope): subject`

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc)
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance

Example:
```
feat(auth): add user authentication
```

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the CHANGELOG.md with a note describing your changes
3. The PR will be merged once you have the sign-off of at least one maintainer

## Issue Reporting

### Bug Reports

Include:
- Quick summary and/or background
- Steps to reproduce
- Expected behavior
- Actual behavior
- Notes (possibly including why you think this might be happening)

### Feature Requests

Include:
- Clear description of the feature
- Rationale
- Example usage
- Possible implementation details

## License

By contributing, you agree that your contributions will be licensed under its UNLICENSED License. 