import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('TrailerMaster')
@Entity('trailer_master')
export class TrailerMaster {
  @Field(() => String, { description: 'Unique identifier for the trailer.' })
  @PrimaryColumn({ name: 'trailer_id' })
  trailer_id: string;
}
