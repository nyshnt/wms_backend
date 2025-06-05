import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async findAll(): Promise<User[]> {
        return this.find();
    }

    async findOneById(id: string): Promise<User> {
        return this.findOneOrFail({ where: { id } });
    }

    async findByEmail(email: string): Promise<User> {
        return this.findOne({ where: { email } });
    }

    async createUser(createUserInput: CreateUserInput): Promise<User> {
        const user = this.create(createUserInput);
        return await this.save(user);
    }

    // Add more repository methods as needed
}
