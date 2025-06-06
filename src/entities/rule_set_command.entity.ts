import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { CommandConfiguration } from './command_configuration.entity';

@ObjectType('RuleSetCommand')
@Entity('rule_set_command')
export class RuleSetCommand extends BaseEntity {
    @Field(() => String, { description: 'Name of the rule set.' })
    @PrimaryColumn({ name: 'rule_set' })
    rule_set: string;

    @Field(() => Number, { description: 'Sequence of the rule within the set.' })
    @PrimaryColumn({ name: 'rule_sequence' })
    rule_sequence: number;

    @Field(() => CommandConfiguration, { description: 'Foreign key referencing Command_Configuration.' })
    @ManyToOne(() => CommandConfiguration)
    @JoinColumn({ name: 'command_configuration_id', referencedColumnName: 'command_configuration_id' })
    command_configuration_id: CommandConfiguration;
}
