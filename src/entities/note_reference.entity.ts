import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { NoteDetail } from './note_detail.entity';

@ObjectType('NoteReference')
@Entity('note_reference')
@Index('IDX_note_reference_reference_note_id', ['reference_note_id'], { unique: true })
export class NoteReference extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the reference note.' })
    @PrimaryGeneratedColumn('uuid')
    reference_note_id: string;

    @Field(() => NoteDetail, { description: 'Foreign key referencing the Note_Detail table.' })
    @ManyToOne(() => NoteDetail)
    @JoinColumn({ name: 'note_id', referencedColumnName: 'note_id' })
    note_id: NoteDetail;

    @Field(() => String, { description: 'Type of reference.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    reference_type: string;

    @Field(() => String, { description: 'ID of the referenced entity.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    reference_id: string;
}
