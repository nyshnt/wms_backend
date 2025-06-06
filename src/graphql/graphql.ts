
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserRole {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    USER = "USER"
}

export class CreateUserInput {
    email: string;
    name: string;
    password: string;
}

export class AreaMaster {
    area_code: string;
    building: BuildingMaster;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
    warehouse: Warehouse;
}

export class AssetMaster {
    asset_id: string;
    asset_number: string;
    client_id: Client;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
    warehouse_id: Warehouse;
}

export class BuildingMaster {
    building_id: string;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
    warehouse: Warehouse;
}

export class CarrierMove {
    carrier_move_id: string;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
}

export class Client {
    client_id: string;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
}

export class CommandConfiguration {
    command_configuration_id: string;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
}

export class ContainerZone {
    container_zone_id: string;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
}

export class CustomerMaster {
    client_id: Client;
    created_at: DateTime;
    customer_number: string;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
}

export class CustomsConsignment {
    client_id: Client;
    created_at: DateTime;
    customs_consignment_id: string;
    deleted_at?: Nullable<DateTime>;
    id: string;
    supplier_number: string;
    updated_at: DateTime;
    warehouse_id: Warehouse;
    work_order_flag: boolean;
}

export class Distribution {
    client_id: Client;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    distribution_id: string;
    distribution_type: DistributionType;
    id: string;
    invoice_line_number: string;
    invoice_number: string;
    invoice_subline_number: string;
    stocking_customer: string;
    supplier_number: string;
    tracking_number: string;
    updated_at: DateTime;
    warehouse_id: Warehouse;
}

export class DistributionType {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    distribution_rule_set: RuleSetCommand;
    distribution_type: string;
    id: string;
    overage_rule_set: RuleSetCommand;
    updated_at: DateTime;
}

export class InventoryDetail {
    client_id: Client;
    created_at: DateTime;
    customs_consignment_id: CustomsConsignment;
    deleted_at?: Nullable<DateTime>;
    device_code: string;
    distribution_id: Distribution;
    id: string;
    inventory_detail_number: string;
    invoice_line_number: string;
    invoice_number: string;
    invoice_subline_number: string;
    load_number: InventoryLoad;
    order_line_number: number;
    order_number: OrderHeader;
    order_subline_number: number;
    part_client_id: PartMaster;
    part_number: PartMaster;
    shipment_line_id: ShipmentLine;
    sub_number: InventorySubLocation;
    supplier_number: string;
    tracking_key: string;
    tracking_number: string;
    updated_at: DateTime;
    warehouse_id: Warehouse;
}

export class InventoryLoad {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    device_code: string;
    dynamic_name: string;
    id: string;
    load_number: string;
    pallet_id: PalletDetail;
    storage_location: string;
    updated_at: DateTime;
    warehouse_id: Warehouse;
}

export class InventorySubLocation {
    load_number: InventoryLoad;
    sub_number: string;
}

export class LocationMaster {
    area: AreaMaster;
    containerZone: ContainerZone;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    locationAccess: string;
    locationType: LocationType;
    movementZone: MovementZone;
    pickZone: PickZone;
    storageLocation: string;
    storageZone: StorageZone;
    storage_location: string;
    updated_at: DateTime;
    warehouse: Warehouse;
    workZone: WorkZoneMaster;
}

export class LocationType {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    location_type_id: string;
    updated_at: DateTime;
}

export class MovementZone {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    movement_zone_id: string;
    updated_at: DateTime;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): User | Promise<User>;
}

export class NoteDetail {
    client_id: Client;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    note_id: string;
    note_text: string;
    note_type_id: NoteType;
    updated_at: DateTime;
    warehouse_id: Warehouse;
}

export class NoteType {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    note_type_description: string;
    note_type_id: string;
    updated_at: DateTime;
}

export class OrderHeader {
    client_id: Client;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    order_number: string;
    updated_at: DateTime;
    warehouse_id: Warehouse;
}

export class OrderLine {
    client_id: Client;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    distribution_id: Distribution;
    id: string;
    order_line_number: string;
    order_number: OrderHeader;
    order_subline_number: string;
    updated_at: DateTime;
    warehouse_id: Warehouse;
}

export class PalletDetail {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    pallet_id: string;
    updated_at: DateTime;
}

export class PartMaster {
    client_id: Client;
    description: string;
    part_client_id: string;
    part_number: string;
    supplier_number: SupplierMaster;
    warehouse_id: Warehouse;
}

export class PickBatch {
    schedule_batch_id: string;
}

export class PickWorkHeader {
    client_id: Client;
    description: string;
    schedule_batch_id: PickBatch;
    warehouse_id: Warehouse;
    work_reference: string;
}

export class PickZone {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    pick_zone_id: string;
    updated_at: DateTime;
}

export abstract class IQuery {
    abstract user(id: string): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;
}

export class RuleSetCommand {
    command_configuration_id: CommandConfiguration;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    rule_sequence: number;
    rule_set: string;
    updated_at: DateTime;
}

export class ShipmentHeader {
    activity_id: string;
    client_id: Client;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    device_code: string;
    id: string;
    order_number: string;
    shipment_id: string;
    updated_at: DateTime;
    warehouse_id: Warehouse;
}

export class ShipmentLine {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    order_line_number: OrderLine;
    order_number: OrderHeader;
    order_subline_number: OrderLine;
    shipment_line_id: string;
    updated_at: DateTime;
}

export class StorageZone {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    storage_zone_id: string;
    updated_at: DateTime;
}

export class SupplierMaster {
    asset_type: string;
    receiving_status: string;
    supplier_number: string;
    trust_flag: boolean;
    warehouse_id: string;
}

export class User {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    email: string;
    id: string;
    is_active: boolean;
    last_login?: Nullable<DateTime>;
    name: string;
    role: UserRole;
    updated_at: DateTime;
}

export class Warehouse {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
    warehouse_id: string;
}

export class WorkOrderDetail {
    client_id: string;
    process_location: string;
    segment_number: number;
    warehouse_id: string;
    work_order_line_number: number;
    work_order_number: string;
    work_order_revision: string;
}

export class WorkZoneMaster {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
    workZoneDescription: string;
    workZoneName: string;
    workZoneType: string;
    work_zone_id: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
