import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class BaseType {
    @Field(() => ID)
    _id: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date;
}

@ObjectType()
export class DeleteResponse {
    @Field(() => Boolean)
    success: boolean;

    @Field(() => String, { nullable: true })
    message?: string;
} 