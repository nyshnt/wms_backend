import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER'
}

registerEnumType(UserRole, {
    name: 'UserRole',
    description: 'User role enumeration',
});

@ObjectType('User')
@Entity('users')
@Index('IDX_users_email', ['email'], { unique: true })
@Index('IDX_users_role', ['role'])
export class User extends BaseEntity {
    @Field(() => String)
    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Field(() => String)
    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;

    @Field(() => UserRole)
    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
        nullable: false
    })
    role: UserRole;

    @Field(() => Boolean)
    @Column({
        type: 'boolean',
        default: true,
        nullable: false
    })
    is_active: boolean;

    @Field(() => Date, { nullable: true })
    @Column({ type: 'timestamp', nullable: true })
    last_login?: Date;
} 