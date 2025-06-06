
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

export class Aisle {
    aisle_id: string;
    warehouse_id: Warehouse;
}

export class AreaMaster {
    area_code: string;
    building_id: string;
    receiving_dock_flag: boolean;
    shipment_dock_flag: boolean;
    warehouse_id: string;
}

export class AssetFeature {
    description: string;
    feature_id: string;
    feature_name: string;
    serviceAsset: ServiceAsset;
}

export class AssetMapDetail {
    map_detail_id: string;
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

export class AssetSlot {
    asset_type: string;
    slot: string;
    slot_code: string;
}

export class AssetType {
    asset_type: string;
    asset_type_id: string;
    client_id: string;
    lot_number: string;
    part_client_id: string;
    part_number: string;
    supplier_number: string;
    warehouse_id: string;
}

export class BuildToOrderAudit {
    asset_type: string;
    begin_time: DateTime;
    build_to_order_audit_id: string;
    build_to_order_audit_status: string;
    build_to_order_audit_type: string;
    end_time: DateTime;
    load_number: string;
    shipment_id: string;
}

export class BuildingMaster {
    building_id: string;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
    warehouse: Warehouse;
}

export class CarrierMatrixHeader {
    carrier_code: string;
    carrier_group: string;
    carrier_matrix_id: string;
    sequence_number: number;
    service_level: string;
    warehouse_id: Warehouse;
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

export class ClientMaster {
    client_address: string;
    client_contact_number: string;
    client_id: string;
    client_name: string;
}

export class CommandConfiguration {
    command_configuration_id: string;
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    updated_at: DateTime;
}

export class CompartmentHeader {
    client_id: string;
    compartment_key: string;
    work_order_number: string;
    work_order_revision: string;
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

export class CycleCountHeader {
    count_batch_number: string;
    creation_date: DateTime;
    identifier_flag_1: boolean;
    inventory_identifier_1: string;
    inventory_value_1: string;
    sequence_number: CycleCountSchedule;
    warehouse_id: Warehouse;
}

export class CycleCountSchedule {
    count_batch_number: string;
    count_id: string;
    part_number: PartMaster;
    sequence_number: string;
    warehouse_id: Warehouse;
}

export class CycleCountTemplateHeader {
    auto_generate_template_flag: boolean;
    cycle_count_template_id: string;
    warehouse_id: string;
}

export class CycleCountType {
    count_type: string;
    detail_flag: boolean;
    operation_code: string;
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
    compartment_key: CompartmentHeader;
    consignment_flag: boolean;
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
    lot_number: string;
    order_line_number: number;
    order_number: OrderHeader;
    order_subline_number: number;
    part_client_id: PartMaster;
    part_number: PartMaster;
    receiving_key: string;
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
    client_id: string;
    load_id: string;
    load_number: string;
    lot_number: string;
    part_client_id: string;
    part_number: string;
    supplier_number: string;
    warehouse_id: string;
}

export class InventoryStatus {
    inventory_status: string;
    part_client_id: PartMaster;
    part_number: PartMaster;
    status_description: string;
    sub_number: InventorySubLocation;
}

export class InventorySubLocation {
    client_id: string;
    lot_number: string;
    part_client_id: string;
    part_number: string;
    sub_location_id: string;
    sub_number: string;
    supplier_number: string;
    warehouse_id: string;
}

export class LocationMaster {
    storage_location: string;
    warehouse_id: string;
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

export class NonServiceAsset {
    asset_status: string;
    client_id: string;
    lot_number: string;
    non_service_asset_id: string;
    part_client_id: string;
    part_number: string;
    supplier_number: string;
    warehouse_id: string;
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

export class ParcelShipperRule {
    location_id: LocationMaster;
    rule_id: string;
    sequence_number: number;
    warehouse_id: Warehouse;
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

export class ReasonCode {
    reason_code: string;
}

export class ReasonGroup {
    reason_group: string;
}

export class ReceivingTruckTracking {
    tracking_number: string;
    warehouse_id: Warehouse;
}

export class ReplenishmentWork {
    lot_number: string;
    origin_code: string;
    part_client_id: string;
    part_number: string;
    picked_quantity: number;
    replenishment_reference: string;
    revision_level: string;
    warehouse_id: string;
}

export class ReportConfiguration {
    EMS_event_name: string;
    default_printer: string;
    digital_signature_required_flag: boolean;
    enable_EMS_flag: boolean;
    functional_area: string;
    keep_days: number;
    product_id: string;
    report_id: string;
    report_layout_file: string;
    report_type: string;
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
    client_id: string;
    lot_number: string;
    part_client_id: string;
    part_number: string;
    service_asset_id: string;
    supplier_number: string;
    warehouse_id: string;
}

export class ServiceMaster {
    actcod: string;
    active_status: boolean;
    activity_code: string;
    created_user_id: string;
    creation_date: DateTime;
    image_file: string;
    imgfil: string;
    modified_date: DateTime;
    modified_user_id: string;
    serv_id: string;
    serv_typ: string;
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

export class SlotItemSetItem {
    client_id: string;
    item_number: string;
    item_set: string;
    warehouse_id: string;
}

export class SlotProfileItemSet {
    item_set: SlotItemSetItem;
    profile_name: string;
    warehouse_id: SlotItemSetItem;
}

export class StorageZone {
    created_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    id: string;
    storage_zone_id: string;
    updated_at: DateTime;
}

export class StorageZoneConfigurationHeader {
    building_id: BuildingMaster;
    insertion_date: DateTime;
    insertion_user_id: string;
    last_update_date: DateTime;
    last_update_user_id: string;
    maximum_level: number;
    maximum_load_per_aisle: number;
    minimum_level: number;
    sort_sequence: number;
    storage_zone_configuration_id: string;
    storage_zone_id: StorageZone;
    strategy: string;
    warehouse_id: Warehouse;
}

export class SupplierMaster {
    address_id: string;
    client_id: string;
    supplier_number: string;
    tracking_consignment_code: string;
}

export class TrailerMaster {
    trailer_id: string;
}

export class TransportationMode {
    direct_flag: boolean;
    insertion_date: DateTime;
    pallet_control_flag: boolean;
    small_package_flag: boolean;
    transportation_mode: string;
    version_number: string;
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
    vehicle_load_limit: string;
    vehicle_type: string;
    vehicle_type_description: string;
    vehicle_type_id: string;
    vehicle_type_name: string;
    voice_code: string;
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

export class WarehouseTransportationMode {
    lock_user_flag: boolean;
    transportation_mode: TransportationMode;
    unit_of_measure_code: WarehouseUnitOfMeasure;
    warehouse_id: TransportationMode;
}

export class WarehouseUnitOfMeasure {
    code_value: string;
    column_name: string;
    default_ship_release_flag: boolean;
    default_work_release_flag: boolean;
    unit_of_measure_code: string;
}

export class WorkOrderDetail {
    client_id: string;
    lot_number: string;
    part_client_id: string;
    part_number: string;
    segment_number: number;
    supplier_number: string;
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
