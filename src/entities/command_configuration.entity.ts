import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('CommandConfiguration')
@Entity('command_configuration')
@Index('IDX_command_configuration_id', ['command_configuration_id'], { unique: true })
export class CommandConfiguration extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the command configuration.' })
    @PrimaryGeneratedColumn('uuid')
    command_configuration_id: string;
}
