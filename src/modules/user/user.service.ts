import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async findOne(id: string): Promise<User> {
        return this.userRepository.findOneById(id);
    }

    async findByEmail(email: string): Promise<User> {
        return this.userRepository.findByEmail(email);
    }

    async create(createUserInput: CreateUserInput): Promise<User> {
        return await this.userRepository.createUser(createUserInput);
    }

    // Add more service methods as needed
}