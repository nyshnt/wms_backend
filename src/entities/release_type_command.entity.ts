import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { AreaMaster } from './area_master.entity';

@ObjectType('ReleaseTypeCommand')
@Entity('release_type_command')
export class ReleaseTypeCommand {
  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => String, { description: 'Identifier for the release type.' })
  @PrimaryColumn({ name: 'release_type_id' })
  release_type_id: string;

  @Field(() => AreaMaster, { description: 'Source area code.' })
  @PrimaryColumn({ name: 'source_area_code' })
  @ManyToOne(() => AreaMaster)
  @JoinColumn({ name: 'source_area_code', referencedColumnName: 'area_code' })
  source_area_code: AreaMaster;

  @Field(() => String, { description: 'Command associated with the release.' })
  @Column({ name: 'release_command', type: 'varchar' })
  release_command: string;

  @Field(() => String, { description: 'Additional arguments for the command.' })
  @Column({ name: 'extra_arguments', type: 'varchar' })
  extra_arguments: string;
}