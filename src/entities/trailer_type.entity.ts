import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('TrailerType')
@Entity('trailer_type')
export class TrailerType {
  @Field(() => String, { description: 'Trailer Type ID.' })
  @PrimaryColumn({ name: 'trailer_type_id' })
  trailer_type_id: string;

  @Field(() => String, { description: 'Type of the trailer.' })
  @Column({ name: 'trailer_type', type: 'varchar', length: 255 })
  trailer_type: string;

  @Field(() => String, { description: 'Name of the trailer type.' })
  @Column({ name: 'trailer_type_name', type: 'varchar', length: 255 })
  trailer_type_name: string;

  @Field(() => String, { description: 'Description of the trailer type.' })
  @Column({ name: 'trailer_type_description', type: 'text', nullable: true })
  trailer_type_description: string;
}
