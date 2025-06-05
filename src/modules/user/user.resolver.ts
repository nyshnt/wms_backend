import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(() => [User])
    async users(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Query(() => User)
    async user(@Args('id', { type: () => ID }) id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Mutation(() => User)
    async createUser(@Args('input') createUserInput: CreateUserInput): Promise<User> {
        return this.userService.create(createUserInput);
    }
}