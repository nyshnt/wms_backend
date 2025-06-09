import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { UserAuthentication } from './user_authentication.entity';

@ObjectType('CommandConfiguration')
@Entity('Command_Configuration')
@Index('IDX_command_id', ['command_id'], { unique: true })
export class CommandConfiguration extends BaseEntity {
    @Field(() => String, { description: 'Unique command identifier.' })
    @PrimaryColumn()
    command_id: string;

    @Field(() => String, { description: 'Customer level for the command.' })
    @PrimaryColumn()
    customer_level: string;

    @Field(() => String, { description: 'Command syntax.' })
    @Column({ nullable: true })
    syntax: string;

    @Field(() => Date, { description: 'Modification date.' })
    @Column({ type: 'timestamp', nullable: true })
    modification_date: Date;

    @Field(() => String, { description: 'Modification user ID.' })
    @ManyToOne(() => UserAuthentication)
    @JoinColumn({ name: 'modification_user_id' })
    modificationUser: UserAuthentication;

    @Field(() => String, { description: 'Group name.' })
    @Column({ nullable: true })
    group_name: string;

    @Field(() => String, { description: 'Command configuration ID.' })
    @PrimaryColumn()
    command_configuration_id: string;
}
