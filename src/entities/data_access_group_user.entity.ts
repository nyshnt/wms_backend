import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('DataAccessGroupUser')
@Entity('data_access_group_user')
export class DataAccessGroupUser {
  @Field(() => String, { description: 'Access group name.' })
  @PrimaryColumn({ name: 'access_group_name' })
  access_group_name: string;

  @Field(() => String, { description: 'User ID.' })
  @PrimaryColumn({ name: 'user_id' })
  user_id: string;
}
