
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

export class AddressMaster {
    address_id: string;
    city: string;
    country: string;
    postal_code: string;
    state: string;
    street: string;
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

export class AssetFeature {
    description: string;
    feature_id: string;
    feature_name: string;
    serviceAsset: ServiceAsset;
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

export class AssetType {
    asset_type: string;
    feature: AssetFeature;
    warehouse: Warehouse;
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

export class ConfirmService {
    confirm_service_id: string;
    confirmation_date: DateTime;
    confirmation_status: boolean;
    confirmed_user_id: string;
    service_rate: ServiceRateMaster;
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

export class DeviceMaster {
    device_class: string;
    device_code: string;
    device_name: string;
    warehouse_id: string;
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

export class FTPMaster {
    FTP_code: string;
}

export class HoldMaster {
    hold_number: string;
    hold_prefix: string;
    warehouse_id: string;
}

export class InventoryDetail {
    FTP_code: FTPMaster;
    client_id: Client;
    created_at: DateTime;
    customs_consignment_id: CustomsConsignment;
    deleted_at?: Nullable<DateTime>;
    device_code: string;
    distribution_id: Distribution;
    id: string;
    inventory_attribute_date_1: DateTime;
    inventory_attribute_date_2: DateTime;
    inventory_attribute_float_1: number;
    inventory_attribute_float_2: number;
    inventory_attribute_float_3: number;
    inventory_attribute_integer_1: number;
    inventory_attribute_integer_5: number;
    inventory_attribute_string_1: string;
    inventory_attribute_string_10: string;
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
    work_reference: PickWorkHeader;
}

export class InventoryLoad {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    device_code: string;
    dynamic_name: string;
    id: string;
    load_number: string;
    load_unit_of_cargo_code: string;
    pallet_id: PalletDetail;
    storage_location: LocationMaster;
    updated_at: DateTime;
    warehouse: Warehouse;
}

export class InventoryStatus {
    inventory_status: string;
    part_client_id: PartMaster;
    part_number: PartMaster;
    status_description: string;
    sub_number: InventorySubLocation;
}

export class InventorySubLocation {
    load_number: InventoryLoad;
    sub_number: string;
    sub_unit_of_cargo_code: string;
    work_reference: string;
}

export class LocationMaster {
    ABC_code: string;
    area: AreaMaster;
    area_code: string;
    auto_move_flag: boolean;
    border_padding: number;
    bottom_left_x_coordinate: number;
    bottom_left_y_coordinate: number;
    bottom_right_x_coordinate: number;
    bottom_right_y_coordinate: number;
    building: BuildingMaster;
    containerZone: ContainerZone;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    device: DeviceMaster;
    id: string;
    locationAccess: string;
    locationType: LocationType;
    location_length: number;
    location_status: string;
    location_volume_capacity: number;
    location_width: number;
    movementZone: MovementZone;
    pickZone: PickZone;
    storageZone: StorageZone;
    storage_location: string;
    top_left_x_coordinate: number;
    top_left_y_coordinate: number;
    top_right_x_coordinate: number;
    top_right_y_coordinate: number;
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
    client: Client;
    client_id: string;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    order_date: DateTime;
    order_id: string;
    order_number: string;
    order_status: string;
    updated_at: DateTime;
    warehouse: WarehouseMaster;
    warehouse_id: string;
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

export class PartFTP {
    FTP_code: FTPMaster;
    part_client_id: PartMaster;
    part_number: PartMaster;
    warehouse_id: Warehouse;
}

export class PartMaster {
    alternate_part_type: string;
    attribute_date_1: DateTime;
    attribute_date_2: DateTime;
    attribute_float_1: number;
    attribute_float_3: number;
    attribute_integer_1: number;
    attribute_integer_5: number;
    attribute_string_1: string;
    attribute_string_10: string;
    client_id: Client;
    display_part_number: string;
    part_client_id: string;
    part_master_column_1: string;
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

export class RFIDReader {
    device: DeviceMaster;
    group_name: string;
    reader_id: string;
    warehouse: Warehouse;
}

export class ReportConfiguration {
    created_user_id: string;
    creation_date: DateTime;
    last_update_date: DateTime;
    last_update_user_id: string;
    report_description: string;
    report_id: string;
    report_name: string;
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

export class ServiceAsset {
    asset_id: string;
    asset_name: string;
    asset_tag: string;
    description: string;
    roll_call_flag: boolean;
    warehouse: Warehouse;
}

export class ServiceMaster {
    active_status: boolean;
    activity_code: string;
    created_user_id: string;
    creation_date: DateTime;
    image_file: string;
    modified_date: DateTime;
    modified_user_id: string;
    service_id: string;
    service_rate: ServiceRateMaster;
    service_type: string;
    warehouse_service: WarehouseService;
}

export class ServiceRateMaster {
    address_id: AddressMaster;
    category_number: string;
    category_type: string;
    client: Client;
    common_code: string;
    confirm_service_id: ConfirmService;
    destination_area: string;
    insertion_date: DateTime;
    insertion_user_id: string;
    inventory_status: InventoryStatus;
    last_update_date: DateTime;
    last_update_user_id: string;
    load_level: string;
    modified_date: DateTime;
    modified_user_id: string;
    movement_type: string;
    order_line_number: OrderLine;
    order_number: OrderHeader;
    order_subline_number: OrderLine;
    order_type: string;
    part_client_id: PartMaster;
    part_number: PartMaster;
    quantity_by_code: number;
    rate_service_name: string;
    service_enabled_flag: boolean;
    service_level: string;
    service_rate_id: string;
    service_request_flag: boolean;
    stop_activity_type: string;
    supplier_number: SupplierMaster;
    trailer_type: string;
    user_id: UserMaster;
    vehicle_type: VehicleType;
    version_number: string;
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
    client_id: Client;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    order_line_number: OrderLine;
    order_number: OrderHeader;
    order_subline_number: OrderLine;
    shipment_id: string;
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

export class TrailerMaster {
    description: string;
    trailer_id: string;
    trailer_number: string;
    warehouse: Warehouse;
}

export class TrailerType {
    trailer_type: string;
    trailer_type_description: string;
    trailer_type_id: string;
    trailer_type_name: string;
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

export class UserMaster {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    role: string;
    user_id: string;
    username: string;
}

export class VehicleType {
    vehicle_type: string;
    vehicle_type_description: string;
    vehicle_type_id: string;
    vehicle_type_name: string;
}

export class Warehouse {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
    warehouse_id: string;
}

export class WarehouseMaster {
    warehouse_id: string;
}

export class WarehouseService {
    load_level: string;
    mixed_part_flag: boolean;
    modified_date: DateTime;
    modified_user_id: string;
    segment_number: string;
    service_enabled_flag: boolean;
    service_id: string;
    special_service_code: string;
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
