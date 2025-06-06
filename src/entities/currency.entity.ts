import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('Currency')
@Entity('currency')
export class Currency {
  @Field(() => String, { description: 'Currency code.' })
  @PrimaryColumn({ name: 'currency_code' })
  currency_code: string;

  @Field(() => String, { description: 'Currency name.' })
  @Column({ name: 'currency_name', type: 'varchar', length: 255 })
  currency_name: string;

  @Field(() => String, { description: 'Currency symbol.' })
  @Column({ name: 'currency_symbol', type: 'varchar', length: 10, nullable: true })
  currency_symbol: string;
}
