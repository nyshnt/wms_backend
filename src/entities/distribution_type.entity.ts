import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('DistributionType')
@Entity('distribution_type')
export class DistributionType extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the distribution type.' })
    @PrimaryGeneratedColumn('uuid')
    distribution_type: string;
} 