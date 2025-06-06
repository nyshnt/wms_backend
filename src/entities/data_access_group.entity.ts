import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('DataAccessGroup')
@Entity('data_access_group')
export class DataAccessGroup {
  @Field(() => String, { description: 'Data access group ID.' })
  @PrimaryColumn({ name: 'data_access_group_id' })
  data_access_group_id: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Group name.' })
  @Column({ name: 'group_name', type: 'varchar' })
  group_name: string;
} 