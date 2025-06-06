import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ParcelShipperRule } from './parcel_shipper_rule.entity';

@ObjectType('ParcelShipperRuleField')
@Entity('parcel_shipper_rule_field')
export class ParcelShipperRuleField {
  @Field(() => ParcelShipperRule, { description: 'Rule ID.' })
  @PrimaryColumn({ name: 'rule_id' })
  @ManyToOne(() => ParcelShipperRule)
  @JoinColumn({ name: 'rule_id', referencedColumnName: 'rule_id' })
  rule_id: ParcelShipperRule;

  @Field(() => String, { description: 'Name of the column.' })
  @PrimaryColumn({ name: 'column_name' })
  column_name: string;

  @Field(() => String, { description: 'Value of the column.' })
  @Column({ name: 'column_value', type: 'varchar' })
  column_value: string;
} 