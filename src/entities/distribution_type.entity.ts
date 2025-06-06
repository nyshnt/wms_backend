import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { RuleSetCommand } from './rule_set_command.entity';

@ObjectType('DistributionType')
@Entity('distribution_type')
export class DistributionType extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the distribution type.' })
    @PrimaryGeneratedColumn('uuid')
    distribution_type: string;

    @Field(() => RuleSetCommand, { description: 'Foreign key referencing Rule_Set_Command.' })
    @ManyToOne(() => RuleSetCommand)
    @JoinColumn({ name: 'distribution_rule_set', referencedColumnName: 'rule_set' })
    distribution_rule_set: RuleSetCommand;

    @Field(() => RuleSetCommand, { description: 'Foreign key referencing Rule_Set_Command for overage rules.' })
    @ManyToOne(() => RuleSetCommand)
    @JoinColumn({ name: 'overage_rule_set', referencedColumnName: 'rule_set' })
    overage_rule_set: RuleSetCommand;
} 