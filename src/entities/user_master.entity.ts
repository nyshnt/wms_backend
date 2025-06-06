import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('UserMaster')
@Entity('user_master')
export class UserMaster {
  @Field(() => String, { description: 'User ID.' })
  @PrimaryColumn({ name: 'user_id' })
  user_id: string;

  @Field(() => String, { description: 'Username of the user.' })
  @Column({ name: 'username', type: 'varchar', length: 255 })
  username: string;

  @Field(() => String, { description: 'Email address of the user.' })
  @Column({ name: 'email', type: 'varchar', length: 255 })
  email: string;

  @Field(() => String, { description: 'Password of the user.' })
  @Column({ name: 'password', type: 'varchar', length: 255 })
  password: string;

  @Field(() => String, { description: 'First name of the user.' })
  @Column({ name: 'first_name', type: 'varchar', length: 255 })
  first_name: string;

  @Field(() => String, { description: 'Last name of the user.' })
  @Column({ name: 'last_name', type: 'varchar', length: 255 })
  last_name: string;

  @Field(() => String, { description: 'Role of the user.' })
  @Column({ name: 'role', type: 'varchar', length: 50 })
  role: string;
}
