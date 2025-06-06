import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { TrailerMaster } from './trailer_master.entity';
import { UserMaster } from './user_master.entity';
import { DeviceMaster } from './device_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('CurrentTrailerActivity')
@Entity('current_trailer_activity')
export class CurrentTrailerActivity {
  @Field(() => TrailerMaster, { description: 'Trailer ID.' })
  @PrimaryColumn({ name: 'trailer_id' })
  @ManyToOne(() => TrailerMaster)
  @JoinColumn({ name: 'trailer_id', referencedColumnName: 'trailer_id' })
  trailer_id: TrailerMaster;

  @Field(() => UserMaster, { description: 'User ID.' })
  @PrimaryColumn({ name: 'user_id' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user_id: UserMaster;

  @Field(() => DeviceMaster, { description: 'Device code.' })
  @PrimaryColumn({ name: 'device_code' })
  @ManyToOne(() => DeviceMaster)
  @JoinColumn({ name: 'device_code', referencedColumnName: 'device_code' })
  device_code: DeviceMaster;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;
}