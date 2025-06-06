import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { CommandConfiguration } from '../entities/command_configuration.entity';

@ObjectType('CommandConfigurationArgument')
@Entity('command_configuration_argument')
export class CommandConfigurationArgument extends BaseEntity {
    @Field(() => String, { description: 'Primary and Foreign key referencing Command_Configuration.' })
    @PrimaryColumn({ name: 'command_configuration_id' })
    commandConfigurationId: string;

    @Field(() => String, { description: 'Argument for the command configuration.' })
    @PrimaryColumn({ name: 'command_configuration_argument' })
    commandConfigurationArgument: string;

    @ManyToOne(() => CommandConfiguration)
    @JoinColumn({ name: 'command_configuration_id', referencedColumnName: 'command_configuration_id' })
    commandConfiguration: CommandConfiguration;
} 