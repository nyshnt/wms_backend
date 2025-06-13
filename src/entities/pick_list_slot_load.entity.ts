import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { InventoryLoadAssetListPicking } from './inventory_load_asset_list_picking.entity';
import { PickListAssetSlotDefinition } from './pick_list_asset_slot_definition.entity';

@Entity('Pick_List_Slot_Load')
export class PickListSlotLoad {
    @PrimaryColumn({ name: 'load_number', type: 'varchar' })
    loadNumber: string;

    @PrimaryColumn({ name: 'slot_load_number', type: 'varchar' })
    slotLoadNumber: string;

    @Column({ name: 'asset_slot_id', type: 'varchar', nullable: true })
    assetSlotId: string;

    @ManyToOne(() => InventoryLoadAssetListPicking, invlod => invlod.load_number, { nullable: false })
    @JoinColumn({ name: 'load_number', referencedColumnName: 'load_number' })
    inventoryLoad: InventoryLoadAssetListPicking;

    @ManyToOne(() => PickListAssetSlotDefinition, slot => slot.slot_type_id, { nullable: true })
    @JoinColumn({ name: 'asset_slot_id', referencedColumnName: 'slot_type_id' })
    pickListAssetSlot: PickListAssetSlotDefinition;
}
