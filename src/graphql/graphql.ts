
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserRole {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    USER = "USER"
}

export class CreateUserInput {
    email: string;
    name: string;
    password: string;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract user(id: string): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;
}

export class User {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    email: string;
    id: string;
    is_active: boolean;
    last_login?: Nullable<DateTime>;
    name: string;
    role: UserRole;
    updated_at: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
