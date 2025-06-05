import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';

@ObjectType()
export abstract class BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => Date)
    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    created_at: Date;

    @Field(() => Date)
    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    updated_at: Date;

    @Field(() => Date, { nullable: true })
    @DeleteDateColumn({ nullable: true })
    deleted_at?: Date;
} 