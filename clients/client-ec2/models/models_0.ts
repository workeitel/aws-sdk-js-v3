import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

/**
 * <p>Details about the target configuration.</p>
 */
export interface TargetConfigurationRequest {
  /**
   * <p>The number of instances the Covertible Reserved Instance offering can be applied to. This parameter is reserved and cannot
   *       be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * <p>The Convertible Reserved Instance offering ID.</p>
   */
  OfferingId: string | undefined;
}

export namespace TargetConfigurationRequest {
  export const filterSensitiveLog = (obj: TargetConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for accepting the quote.</p>
 */
export interface AcceptReservedInstancesExchangeQuoteRequest {
  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   */
  TargetConfigurations?: TargetConfigurationRequest[];

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange for another Convertible
   *             Reserved Instance of the same or higher value.</p>
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AcceptReservedInstancesExchangeQuoteRequest {
  export const filterSensitiveLog = (obj: AcceptReservedInstancesExchangeQuoteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of the exchange and whether it was <code>successful</code>.</p>
 */
export interface AcceptReservedInstancesExchangeQuoteResult {
  /**
   * <p>The ID of the successful exchange.</p>
   */
  ExchangeId?: string;
}

export namespace AcceptReservedInstancesExchangeQuoteResult {
  export const filterSensitiveLog = (obj: AcceptReservedInstancesExchangeQuoteResult): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;
}

export namespace AcceptTransitGatewayPeeringAttachmentRequest {
  export const filterSensitiveLog = (obj: AcceptTransitGatewayPeeringAttachmentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the transit gateway in the peering attachment.</p>
 */
export interface PeeringTgwInfo {
  /**
   * <p>The AWS account ID of the owner of the transit gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Region of the transit gateway.</p>
   */
  Region?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;
}

export namespace PeeringTgwInfo {
  export const filterSensitiveLog = (obj: PeeringTgwInfo): any => ({
    ...obj,
  });
}

export type TransitGatewayAttachmentState =
  | "available"
  | "deleted"
  | "deleting"
  | "failed"
  | "failing"
  | "initiating"
  | "initiatingRequest"
  | "modifying"
  | "pending"
  | "pendingAcceptance"
  | "rejected"
  | "rejecting"
  | "rollingBack";

/**
 * <p>The status of the transit gateway peering attachment.</p>
 */
export interface PeeringAttachmentStatus {
  /**
   * <p>The status message, if applicable.</p>
   */
  Message?: string;

  /**
   * <p>The status code.</p>
   */
  Code?: string;
}

export namespace PeeringAttachmentStatus {
  export const filterSensitiveLog = (obj: PeeringAttachmentStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   *          <p>Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters.
   *          May not begin with <code>aws:</code>.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the transit gateway peering attachment.</p>
 */
export interface TransitGatewayPeeringAttachment {
  /**
   * <p>The status of the transit gateway peering attachment.</p>
   */
  Status?: PeeringAttachmentStatus;

  /**
   * <p>The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The time the transit gateway peering attachment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the transit gateway peering attachment.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Information about the accepter transit gateway.</p>
   */
  AccepterTgwInfo?: PeeringTgwInfo;

  /**
   * <p>Information about the requester transit gateway.</p>
   */
  RequesterTgwInfo?: PeeringTgwInfo;
}

export namespace TransitGatewayPeeringAttachment {
  export const filterSensitiveLog = (obj: TransitGatewayPeeringAttachment): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export namespace AcceptTransitGatewayPeeringAttachmentResult {
  export const filterSensitiveLog = (obj: AcceptTransitGatewayPeeringAttachmentResult): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayVpcAttachmentRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;
}

export namespace AcceptTransitGatewayVpcAttachmentRequest {
  export const filterSensitiveLog = (obj: AcceptTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export type DnsSupportValue = "disable" | "enable";

export type Ipv6SupportValue = "disable" | "enable";

/**
 * <p>Describes the VPC attachment options.</p>
 */
export interface TransitGatewayVpcAttachmentOptions {
  /**
   * <p>Indicates whether IPv6 support is disabled.</p>
   */
  Ipv6Support?: Ipv6SupportValue | string;

  /**
   * <p>Indicates whether DNS support is enabled.</p>
   */
  DnsSupport?: DnsSupportValue | string;
}

export namespace TransitGatewayVpcAttachmentOptions {
  export const filterSensitiveLog = (obj: TransitGatewayVpcAttachmentOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC attachment.</p>
 */
export interface TransitGatewayVpcAttachment {
  /**
   * <p>The ID of the AWS account that owns the VPC.</p>
   */
  VpcOwnerId?: string;

  /**
   * <p>The IDs of the subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: TransitGatewayVpcAttachmentOptions;

  /**
   * <p>The tags for the VPC attachment.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;
}

export namespace TransitGatewayVpcAttachment {
  export const filterSensitiveLog = (obj: TransitGatewayVpcAttachment): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayVpcAttachmentResult {
  /**
   * <p>The VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace AcceptTransitGatewayVpcAttachmentResult {
  export const filterSensitiveLog = (obj: AcceptTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface AcceptVpcEndpointConnectionsRequest {
  /**
   * <p>The IDs of one or more interface VPC endpoints.</p>
   */
  VpcEndpointIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC endpoint service.</p>
   */
  ServiceId: string | undefined;
}

export namespace AcceptVpcEndpointConnectionsRequest {
  export const filterSensitiveLog = (obj: AcceptVpcEndpointConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the error that occurred. For more information about errors, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.</p>
 */
export interface UnsuccessfulItemError {
  /**
   * <p>The error message accompanying the error code.</p>
   */
  Message?: string;

  /**
   * <p>The error code.</p>
   */
  Code?: string;
}

export namespace UnsuccessfulItemError {
  export const filterSensitiveLog = (obj: UnsuccessfulItemError): any => ({
    ...obj,
  });
}

/**
 * <p>Information about items that were not successfully processed in a batch call.</p>
 */
export interface UnsuccessfulItem {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>Information about the error.</p>
   */
  Error?: UnsuccessfulItemError;
}

export namespace UnsuccessfulItem {
  export const filterSensitiveLog = (obj: UnsuccessfulItem): any => ({
    ...obj,
  });
}

export interface AcceptVpcEndpointConnectionsResult {
  /**
   * <p>Information about the interface endpoints that were not accepted, if
   *             applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace AcceptVpcEndpointConnectionsResult {
  export const filterSensitiveLog = (obj: AcceptVpcEndpointConnectionsResult): any => ({
    ...obj,
  });
}

export interface AcceptVpcPeeringConnectionRequest {
  /**
   * <p>The ID of the VPC peering connection. You must specify this parameter in the
   * 			request.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AcceptVpcPeeringConnectionRequest {
  export const filterSensitiveLog = (obj: AcceptVpcPeeringConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 CIDR block.</p>
 */
export interface CidrBlock {
  /**
   * <p>The IPv4 CIDR block.</p>
   */
  CidrBlock?: string;
}

export namespace CidrBlock {
  export const filterSensitiveLog = (obj: CidrBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 CIDR block.</p>
 */
export interface Ipv6CidrBlock {
  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;
}

export namespace Ipv6CidrBlock {
  export const filterSensitiveLog = (obj: Ipv6CidrBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the VPC peering connection options.</p>
 */
export interface VpcPeeringConnectionOptionsDescription {
  /**
   * <p>Indicates whether a local ClassicLink connection can communicate with the peer VPC over the VPC peering connection.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>Indicates whether a local VPC can communicate with a ClassicLink connection in the peer VPC over the VPC peering connection.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;

  /**
   * <p>Indicates whether a local VPC can resolve public DNS hostnames to private IP addresses when queried from instances in a peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;
}

export namespace VpcPeeringConnectionOptionsDescription {
  export const filterSensitiveLog = (obj: VpcPeeringConnectionOptionsDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC in a VPC peering connection.</p>
 */
export interface VpcPeeringConnectionVpcInfo {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Information about the IPv4 CIDR blocks for the VPC.</p>
   */
  CidrBlockSet?: CidrBlock[];

  /**
   * <p>The Region in which the VPC is located.</p>
   */
  Region?: string;

  /**
   * <p>The AWS account ID of the VPC owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>Information about the VPC peering connection options for the accepter or requester VPC.</p>
   */
  PeeringOptions?: VpcPeeringConnectionOptionsDescription;

  /**
   * <p>The IPv6 CIDR block for the VPC.</p>
   */
  Ipv6CidrBlockSet?: Ipv6CidrBlock[];

  /**
   * <p>The IPv4 CIDR block for the VPC.</p>
   */
  CidrBlock?: string;
}

export namespace VpcPeeringConnectionVpcInfo {
  export const filterSensitiveLog = (obj: VpcPeeringConnectionVpcInfo): any => ({
    ...obj,
  });
}

export type VpcPeeringConnectionStateReasonCode =
  | "active"
  | "deleted"
  | "deleting"
  | "expired"
  | "failed"
  | "initiating-request"
  | "pending-acceptance"
  | "provisioning"
  | "rejected";

/**
 * <p>Describes the status of a VPC peering connection.</p>
 */
export interface VpcPeeringConnectionStateReason {
  /**
   * <p>A message that provides more information about the status, if applicable.</p>
   */
  Message?: string;

  /**
   * <p>The status of the VPC peering connection.</p>
   */
  Code?: VpcPeeringConnectionStateReasonCode | string;
}

export namespace VpcPeeringConnectionStateReason {
  export const filterSensitiveLog = (obj: VpcPeeringConnectionStateReason): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC peering connection.</p>
 */
export interface VpcPeeringConnection {
  /**
   * <p>Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  RequesterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * <p>The time that an unaccepted VPC peering connection will expire.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  AccepterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The status of the VPC peering connection.</p>
   */
  Status?: VpcPeeringConnectionStateReason;
}

export namespace VpcPeeringConnection {
  export const filterSensitiveLog = (obj: VpcPeeringConnection): any => ({
    ...obj,
  });
}

export interface AcceptVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   */
  VpcPeeringConnection?: VpcPeeringConnection;
}

export namespace AcceptVpcPeeringConnectionResult {
  export const filterSensitiveLog = (obj: AcceptVpcPeeringConnectionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a value of an account attribute.</p>
 */
export interface AccountAttributeValue {
  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

export namespace AccountAttributeValue {
  export const filterSensitiveLog = (obj: AccountAttributeValue): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an account attribute.</p>
 */
export interface AccountAttribute {
  /**
   * <p>The name of the account attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The values for the account attribute.</p>
   */
  AttributeValues?: AccountAttributeValue[];
}

export namespace AccountAttribute {
  export const filterSensitiveLog = (obj: AccountAttribute): any => ({
    ...obj,
  });
}

export type AccountAttributeName = "default-vpc" | "supported-platforms";

export enum InstanceHealthStatus {
  HEALTHY_STATUS = "healthy",
  UNHEALTHY_STATUS = "unhealthy",
}

/**
 * <p>Describes a running instance in a Spot Fleet.</p>
 */
export interface ActiveInstance {
  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The health status of the instance. If the status of either the instance status check
   *           or the system status check is <code>impaired</code>, the health status of the instance
   *           is <code>unhealthy</code>. Otherwise, the health status is <code>healthy</code>.</p>
   */
  InstanceHealth?: InstanceHealthStatus | string;
}

export namespace ActiveInstance {
  export const filterSensitiveLog = (obj: ActiveInstance): any => ({
    ...obj,
  });
}

export enum ActivityStatus {
  ERROR = "error",
  FULFILLED = "fulfilled",
  PENDING_FULFILLMENT = "pending_fulfillment",
  PENDING_TERMINATION = "pending_termination",
}

/**
 * <p>An entry for a prefix list.</p>
 */
export interface AddPrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>A description for the entry.</p>
   *         <p>Constraints: Up to 255 characters in length.</p>
   */
  Description?: string;
}

export namespace AddPrefixListEntry {
  export const filterSensitiveLog = (obj: AddPrefixListEntry): any => ({
    ...obj,
  });
}

export type DomainType = "standard" | "vpc";

/**
 * <p>Describes an Elastic IP address, or a carrier IP address.</p>
 */
export interface Address {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>Any tags assigned to the Elastic IP address.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of an address pool.</p>
   */
  PublicIpv4Pool?: string;

  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which AWS advertises IP addresses. </p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The ID representing the association of the address with an instance in a VPC.</p>
   */
  AssociationId?: string;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>The ID of the AWS account that owns the network interface.</p>
   */
  NetworkInterfaceOwnerId?: string;

  /**
   * <p>The ID of the instance that the address is associated with (if any).</p>
   */
  InstanceId?: string;

  /**
   * <p>Indicates whether this Elastic IP address is for use with instances
   * 				in EC2-Classic (<code>standard</code>) or instances in a VPC (<code>vpc</code>).</p>
   */
  Domain?: DomainType | string;

  /**
   * <p>The carrier IP address associated. This option is only available for network interfaces
   *       which  reside in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
   */
  CarrierIp?: string;

  /**
   * <p>The ID representing the allocation of the address for use with EC2-VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>The private IP address associated with the Elastic IP address.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CustomerOwnedIp?: string;
}

export namespace Address {
  export const filterSensitiveLog = (obj: Address): any => ({
    ...obj,
  });
}

export interface AdvertiseByoipCidrRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The address range, in CIDR notation. This must be the exact range that you provisioned.
   *          You can't advertise only a portion of the provisioned range.</p>
   */
  Cidr: string | undefined;
}

export namespace AdvertiseByoipCidrRequest {
  export const filterSensitiveLog = (obj: AdvertiseByoipCidrRequest): any => ({
    ...obj,
  });
}

export type ByoipCidrState =
  | "advertised"
  | "deprovisioned"
  | "failed-deprovision"
  | "failed-provision"
  | "pending-deprovision"
  | "pending-provision"
  | "provisioned"
  | "provisioned-not-publicly-advertisable";

/**
 * <p>Information about an address range that is provisioned for use with your AWS resources
 *          through bring your own IP addresses (BYOIP).</p>
 */
export interface ByoipCidr {
  /**
   * <p>The state of the address pool.</p>
   */
  State?: ByoipCidrState | string;

  /**
   * <p>Upon success, contains the ID of the address pool. Otherwise, contains an error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>The description of the address range.</p>
   */
  Description?: string;
}

export namespace ByoipCidr {
  export const filterSensitiveLog = (obj: ByoipCidr): any => ({
    ...obj,
  });
}

export interface AdvertiseByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace AdvertiseByoipCidrResult {
  export const filterSensitiveLog = (obj: AdvertiseByoipCidrResult): any => ({
    ...obj,
  });
}

export type Affinity = "default" | "host";

export interface AllocateAddressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>[EC2-VPC] The Elastic IP address to recover or an IPv4 address from an address pool.</p>
   */
  Address?: string;

  /**
   * <p>The ID of a customer-owned address pool. Use this parameter to let Amazon EC2
   *         select an address from the address pool. Alternatively, specify a specific
   *         address from the address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p> A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS
   *       advertises IP addresses. Use this parameter to limit the IP address to this location. IP
   *       addresses cannot move between network border groups.</p>
   *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">DescribeAvailabilityZones</a> to view the network border groups.</p>
   *
   *          <note>
   *             <p>You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 classic, you will receive an <code>InvalidParameterCombination</code> error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.</p>
   *          </note>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Indicates whether the Elastic IP address is for use with instances in a VPC or instances in EC2-Classic.</p>
   *          <p>Default: If the Region supports EC2-Classic, the default is <code>standard</code>. Otherwise, the default
   *          is <code>vpc</code>.</p>
   */
  Domain?: DomainType | string;

  /**
   * <p>The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
   *        To specify a specific address from the address pool, use the <code>Address</code> parameter instead.</p>
   */
  PublicIpv4Pool?: string;
}

export namespace AllocateAddressRequest {
  export const filterSensitiveLog = (obj: AllocateAddressRequest): any => ({
    ...obj,
  });
}

export interface AllocateAddressResult {
  /**
   * <p>The ID of an address pool.</p>
   */
  PublicIpv4Pool?: string;

  /**
   * <p>The carrier IP address. This option is only available for network interfaces which  reside
   *       in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
   */
  CarrierIp?: string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>Indicates whether the Elastic IP address is for use with instances in a VPC (<code>vpc</code>) or
   * 				instances in EC2-Classic (<code>standard</code>).</p>
   */
  Domain?: DomainType | string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>[EC2-VPC] The ID that AWS assigns to represent the allocation of the Elastic IP address for use with instances in a VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises
   *       IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;
}

export namespace AllocateAddressResult {
  export const filterSensitiveLog = (obj: AllocateAddressResult): any => ({
    ...obj,
  });
}

export type AutoPlacement = "off" | "on";

export type HostRecovery = "off" | "on";

export type ResourceType =
  | "client-vpn-endpoint"
  | "customer-gateway"
  | "dedicated-host"
  | "dhcp-options"
  | "egress-only-internet-gateway"
  | "elastic-gpu"
  | "elastic-ip"
  | "export-image-task"
  | "export-instance-task"
  | "fleet"
  | "fpga-image"
  | "host-reservation"
  | "image"
  | "import-image-task"
  | "import-snapshot-task"
  | "instance"
  | "internet-gateway"
  | "key-pair"
  | "launch-template"
  | "local-gateway-route-table-vpc-association"
  | "natgateway"
  | "network-acl"
  | "network-interface"
  | "placement-group"
  | "reserved-instances"
  | "route-table"
  | "security-group"
  | "snapshot"
  | "spot-fleet-request"
  | "spot-instances-request"
  | "subnet"
  | "traffic-mirror-filter"
  | "traffic-mirror-session"
  | "traffic-mirror-target"
  | "transit-gateway"
  | "transit-gateway-attachment"
  | "transit-gateway-multicast-domain"
  | "transit-gateway-route-table"
  | "volume"
  | "vpc"
  | "vpc-flow-log"
  | "vpc-peering-connection"
  | "vpn-connection"
  | "vpn-gateway";

/**
 * <p>The tags to apply to a resource when the resource is being created.</p>
 */
export interface TagSpecification {
  /**
   * <p>The type of resource to tag. Currently, the resource types that support tagging on
   *             creation are: <code>capacity-reservation</code> | <code>client-vpn-endpoint</code> |
   *                 <code>customer-gateway</code> | <code>dedicated-host</code> |
   *                 <code>dhcp-options</code> | <code>export-image-task</code> |
   *                 <code>export-instance-task</code> | <code>fleet</code> | <code>fpga-image</code> |
   *                 <code>host-reservation</code> | <code>import-image-task</code> |
   *                 <code>import-snapshot-task</code> | <code>instance</code> |
   *                 <code>internet-gateway</code> | <code>ipv4pool-ec2</code> |
   *                 <code>ipv6pool-ec2</code> | <code>key-pair</code> | <code>launch-template</code> |
   *                 <code>placement-group</code> | <code>prefix-list</code> | <code>natgateway</code> |
   *                 <code>network-acl</code> | <code>route-table</code> | <code>security-group</code> |
   *                 <code>spot-fleet-request</code> | <code>spot-instances-request</code> |
   *                 <code>snapshot</code> | <code>subnet</code> | <code>traffic-mirror-filter</code> |
   *                 <code>traffic-mirror-session</code> | <code>traffic-mirror-target</code> |
   *                 <code>transit-gateway</code> | <code>transit-gateway-attachment</code> |
   *                 <code>transit-gateway-route-table</code> | <code>volume</code> |<code>vpc</code> |
   *                 <code> vpc-peering-connection</code> | <code>vpc-endpoint</code> (for interface and
   *             gateway endpoints) | <code>vpc-endpoint-service</code> (for AWS PrivateLink) |
   *                 <code>vpc-flow-log</code> | <code>vpn-connection</code> |
   *             <code>vpn-gateway</code>.</p>
   *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Tag[];
}

export namespace TagSpecification {
  export const filterSensitiveLog = (obj: TagSpecification): any => ({
    ...obj,
  });
}

export interface AllocateHostsRequest {
  /**
   * <p>The Availability Zone in which to allocate the Dedicated Host.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Indicates whether the host accepts any untargeted instance launches that
   *     		match its instance type configuration, or if it only accepts Host tenancy
   *     		instance launches that specify its unique host ID. For more information,
   *     		see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-understanding">
   *             	Understanding Instance Placement and Host Affinity</a> in the
   *         	<i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *
   *         <p>Default: <code>on</code>
   *          </p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * <p>Specifies the instance family to be supported by the Dedicated Hosts. If you specify
   * 			an instance family, the Dedicated Hosts support multiple instance types within that
   * 			instance family.</p>
   *
   * 		       <p>If you want the Dedicated Hosts to support a specific instance type only, omit this
   * 			parameter and specify <b>InstanceType</b>
   * 			instead. You cannot specify <b>InstanceFamily</b> and
   * 			<b>InstanceType</b> in the same request.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The tags to apply to the Dedicated Host during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host.
   * 			Host recovery is disabled by default. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html">
   * 				Host Recovery</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * 		       <p>Default: <code>off</code>
   *          </p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Hosts. If you
   * 		specify an instance type, the Dedicated Hosts support instances of the
   * 		specified instance type only.</p>
   *
   *     	    <p>If you want the Dedicated Hosts to support multiple instance types in a specific
   *     		instance family, omit this parameter and specify <b>InstanceFamily</b>
   *     		instead. You cannot specify <b>InstanceType</b> and
   *     		<b>InstanceFamily</b> in the same request.</p>
   */
  InstanceType?: string;

  /**
   * <p>The number of Dedicated Hosts to allocate to your account with these parameters.</p>
   */
  Quantity: number | undefined;
}

export namespace AllocateHostsRequest {
  export const filterSensitiveLog = (obj: AllocateHostsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of AllocateHosts.</p>
 */
export interface AllocateHostsResult {
  /**
   * <p>The ID of the allocated Dedicated Host. This is used to launch an instance onto a
   * 			specific host.</p>
   */
  HostIds?: string[];
}

export namespace AllocateHostsResult {
  export const filterSensitiveLog = (obj: AllocateHostsResult): any => ({
    ...obj,
  });
}

export type AllocationState =
  | "available"
  | "pending"
  | "permanent-failure"
  | "released"
  | "released-permanent-failure"
  | "under-assessment";

export enum AllocationStrategy {
  CAPACITY_OPTIMIZED = "capacityOptimized",
  DIVERSIFIED = "diversified",
  LOWEST_PRICE = "lowestPrice",
}

export enum PrincipalType {
  Account = "Account",
  All = "All",
  OrganizationUnit = "OrganizationUnit",
  Role = "Role",
  Service = "Service",
  User = "User",
}

/**
 * <p>Describes a principal.</p>
 */
export interface AllowedPrincipal {
  /**
   * <p>The type of principal.</p>
   */
  PrincipalType?: PrincipalType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   */
  Principal?: string;
}

export namespace AllowedPrincipal {
  export const filterSensitiveLog = (obj: AllowedPrincipal): any => ({
    ...obj,
  });
}

export type AllowsMultipleInstanceTypes = "off" | "on";

export interface ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC in which the associated target network is located.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of the security groups to apply to the associated target network. Up to 5 security groups can
   * 			be applied to an associated target network.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export namespace ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  export const filterSensitiveLog = (obj: ApplySecurityGroupsToClientVpnTargetNetworkRequest): any => ({
    ...obj,
  });
}

export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
  /**
   * <p>The IDs of the applied security groups.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace ApplySecurityGroupsToClientVpnTargetNetworkResult {
  export const filterSensitiveLog = (obj: ApplySecurityGroupsToClientVpnTargetNetworkResult): any => ({
    ...obj,
  });
}

export interface AssignIpv6AddressesRequest {
  /**
   * <p>The number of IPv6 addresses to assign to the network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range. You can't use this
   *             option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>One or more specific IPv6 addresses to be assigned to the network interface. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: string[];
}

export namespace AssignIpv6AddressesRequest {
  export const filterSensitiveLog = (obj: AssignIpv6AddressesRequest): any => ({
    ...obj,
  });
}

export interface AssignIpv6AddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv6 addresses assigned to the network interface.</p>
   */
  AssignedIpv6Addresses?: string[];
}

export namespace AssignIpv6AddressesResult {
  export const filterSensitiveLog = (obj: AssignIpv6AddressesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for AssignPrivateIpAddresses.</p>
 */
export interface AssignPrivateIpAddressesRequest {
  /**
   * <p>The number of secondary IP addresses to assign to the network interface. You can't specify this parameter when also specifying private IP addresses.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>Indicates whether to allow an IP address that is already assigned to another network interface or instance to be reassigned to the specified network interface.</p>
   */
  AllowReassignment?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>One or more IP addresses to be assigned as a secondary private IP address to the network interface. You can't specify this parameter when also specifying a number of secondary IP addresses.</p>
   *         <p>If you don't specify an IP address, Amazon EC2 automatically selects an IP address within the subnet range.</p>
   */
  PrivateIpAddresses?: string[];
}

export namespace AssignPrivateIpAddressesRequest {
  export const filterSensitiveLog = (obj: AssignPrivateIpAddressesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the private IP addresses assigned to a network interface.</p>
 */
export interface AssignedPrivateIpAddress {
  /**
   * <p>The private IP address assigned to the network interface.</p>
   */
  PrivateIpAddress?: string;
}

export namespace AssignedPrivateIpAddress {
  export const filterSensitiveLog = (obj: AssignedPrivateIpAddress): any => ({
    ...obj,
  });
}

export interface AssignPrivateIpAddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP addresses assigned to the network interface.</p>
   */
  AssignedPrivateIpAddresses?: AssignedPrivateIpAddress[];
}

export namespace AssignPrivateIpAddressesResult {
  export const filterSensitiveLog = (obj: AssignPrivateIpAddressesResult): any => ({
    ...obj,
  });
}

export interface AssociateAddressRequest {
  /**
   * <p>The Elastic IP address to associate with the instance. This is required for EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>The ID of the instance. This is required for EC2-Classic. For EC2-VPC, you can specify either the instance ID or the network interface ID, but not both. The operation fails if you specify an instance ID unless exactly one network interface is attached.</p>
   */
  InstanceId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>[EC2-VPC] For a VPC in an EC2-Classic account, specify true to allow an Elastic IP address that is already associated with an instance or network interface to be reassociated with the specified instance or network interface. Otherwise, the operation fails. In a VPC in an EC2-VPC-only account, reassociation is automatic, therefore you can specify false to ensure the operation fails if the Elastic IP address is already associated with another resource.</p>
   */
  AllowReassociation?: boolean;

  /**
   * <p>[EC2-VPC] The allocation ID. This is required for EC2-VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>[EC2-VPC] The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.</p>
   *    	     <p>For EC2-VPC, you can specify either the instance ID or the network interface ID, but not both. </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>[EC2-VPC] The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.</p>
   */
  PrivateIpAddress?: string;
}

export namespace AssociateAddressRequest {
  export const filterSensitiveLog = (obj: AssociateAddressRequest): any => ({
    ...obj,
  });
}

export interface AssociateAddressResult {
  /**
   * <p>[EC2-VPC] The ID that represents the association of the Elastic IP address with an instance.</p>
   */
  AssociationId?: string;
}

export namespace AssociateAddressResult {
  export const filterSensitiveLog = (obj: AssociateAddressResult): any => ({
    ...obj,
  });
}

export interface AssociateClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the subnet to associate with the Client VPN endpoint.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace AssociateClientVpnTargetNetworkRequest {
  export const filterSensitiveLog = (obj: AssociateClientVpnTargetNetworkRequest): any => ({
    ...obj,
  });
}

export type AssociationStatusCode =
  | "associated"
  | "associating"
  | "association-failed"
  | "disassociated"
  | "disassociating";

/**
 * <p>Describes the state of a target network association.</p>
 */
export interface AssociationStatus {
  /**
   * <p>A message about the status of the target network association, if applicable.</p>
   */
  Message?: string;

  /**
   * <p>The state of the target network association.</p>
   */
  Code?: AssociationStatusCode | string;
}

export namespace AssociationStatus {
  export const filterSensitiveLog = (obj: AssociationStatus): any => ({
    ...obj,
  });
}

export interface AssociateClientVpnTargetNetworkResult {
  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;

  /**
   * <p>The unique ID of the target network association.</p>
   */
  AssociationId?: string;
}

export namespace AssociateClientVpnTargetNetworkResult {
  export const filterSensitiveLog = (obj: AssociateClientVpnTargetNetworkResult): any => ({
    ...obj,
  });
}

export interface AssociateDhcpOptionsRequest {
  /**
   * <p>The ID of the DHCP options set, or <code>default</code> to associate
   *         no DHCP options with the VPC.</p>
   */
  DhcpOptionsId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AssociateDhcpOptionsRequest {
  export const filterSensitiveLog = (obj: AssociateDhcpOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface IamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

export namespace IamInstanceProfileSpecification {
  export const filterSensitiveLog = (obj: IamInstanceProfileSpecification): any => ({
    ...obj,
  });
}

export interface AssociateIamInstanceProfileRequest {
  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace AssociateIamInstanceProfileRequest {
  export const filterSensitiveLog = (obj: AssociateIamInstanceProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface IamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the instance profile.</p>
   */
  Id?: string;
}

export namespace IamInstanceProfile {
  export const filterSensitiveLog = (obj: IamInstanceProfile): any => ({
    ...obj,
  });
}

export enum IamInstanceProfileAssociationState {
  ASSOCIATED = "associated",
  ASSOCIATING = "associating",
  DISASSOCIATED = "disassociated",
  DISASSOCIATING = "disassociating",
}

/**
 * <p>Describes an association between an IAM instance profile and an instance.</p>
 */
export interface IamInstanceProfileAssociation {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The time the IAM instance profile was associated with the instance.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: IamInstanceProfileAssociationState | string;
}

export namespace IamInstanceProfileAssociation {
  export const filterSensitiveLog = (obj: IamInstanceProfileAssociation): any => ({
    ...obj,
  });
}

export interface AssociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

export namespace AssociateIamInstanceProfileResult {
  export const filterSensitiveLog = (obj: AssociateIamInstanceProfileResult): any => ({
    ...obj,
  });
}

export interface AssociateRouteTableRequest {
  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace AssociateRouteTableRequest {
  export const filterSensitiveLog = (obj: AssociateRouteTableRequest): any => ({
    ...obj,
  });
}

export type RouteTableAssociationStateCode =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed";

/**
 * <p>Describes the state of an association between a route table and a subnet or gateway.</p>
 */
export interface RouteTableAssociationState {
  /**
   * <p>The state of the association.</p>
   */
  State?: RouteTableAssociationStateCode | string;

  /**
   * <p>The status message, if applicable.</p>
   */
  StatusMessage?: string;
}

export namespace RouteTableAssociationState {
  export const filterSensitiveLog = (obj: RouteTableAssociationState): any => ({
    ...obj,
  });
}

export interface AssociateRouteTableResult {
  /**
   * <p>The route table association ID. This ID is required for disassociating the route
   * 			table.</p>
   */
  AssociationId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

export namespace AssociateRouteTableResult {
  export const filterSensitiveLog = (obj: AssociateRouteTableResult): any => ({
    ...obj,
  });
}

export interface AssociateSubnetCidrBlockRequest {
  /**
   * <p>The IPv6 CIDR block for your subnet. The subnet must have a /64 prefix
   *             length.</p>
   */
  Ipv6CidrBlock: string | undefined;

  /**
   * <p>The ID of your subnet.</p>
   */
  SubnetId: string | undefined;
}

export namespace AssociateSubnetCidrBlockRequest {
  export const filterSensitiveLog = (obj: AssociateSubnetCidrBlockRequest): any => ({
    ...obj,
  });
}

export type SubnetCidrBlockStateCode =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed"
  | "failing";

/**
 * <p>Describes the state of a CIDR block.</p>
 */
export interface SubnetCidrBlockState {
  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The state of a CIDR block.</p>
   */
  State?: SubnetCidrBlockStateCode | string;
}

export namespace SubnetCidrBlockState {
  export const filterSensitiveLog = (obj: SubnetCidrBlockState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 CIDR block associated with a subnet.</p>
 */
export interface SubnetIpv6CidrBlockAssociation {
  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: SubnetCidrBlockState;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId?: string;
}

export namespace SubnetIpv6CidrBlockAssociation {
  export const filterSensitiveLog = (obj: SubnetIpv6CidrBlockAssociation): any => ({
    ...obj,
  });
}

export interface AssociateSubnetCidrBlockResult {
  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;
}

export namespace AssociateSubnetCidrBlockResult {
  export const filterSensitiveLog = (obj: AssociateSubnetCidrBlockResult): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The ID of the transit gateway attachment to associate with the transit gateway multicast domain.</p>
   */
  TransitGatewayAttachmentId?: string;
}

export namespace AssociateTransitGatewayMulticastDomainRequest {
  export const filterSensitiveLog = (obj: AssociateTransitGatewayMulticastDomainRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayAttachmentResourceType = "direct-connect-gateway" | "peering" | "tgw-peering" | "vpc" | "vpn";

export type TransitGatewayMulitcastDomainAssociationState =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating";

/**
 * <p>Describes the subnet association with the transit gateway multicast domain.</p>
 */
export interface SubnetAssociation {
  /**
   * <p>The state of the subnet association.</p>
   */
  State?: TransitGatewayMulitcastDomainAssociationState | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace SubnetAssociation {
  export const filterSensitiveLog = (obj: SubnetAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the multicast domain associations.</p>
 */
export interface TransitGatewayMulticastDomainAssociations {
  /**
   * <p>The subnets associated with the multicast domain.</p>
   */
  Subnets?: SubnetAssociation[];

  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;
}

export namespace TransitGatewayMulticastDomainAssociations {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomainAssociations): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain associations.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export namespace AssociateTransitGatewayMulticastDomainResult {
  export const filterSensitiveLog = (obj: AssociateTransitGatewayMulticastDomainResult): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AssociateTransitGatewayRouteTableRequest {
  export const filterSensitiveLog = (obj: AssociateTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayAssociationState = "associated" | "associating" | "disassociated" | "disassociating";

/**
 * <p>Describes an association between a resource attachment and a transit gateway route table.</p>
 */
export interface TransitGatewayAssociation {
  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;
}

export namespace TransitGatewayAssociation {
  export const filterSensitiveLog = (obj: TransitGatewayAssociation): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayRouteTableResult {
  /**
   * <p>The ID of the association.</p>
   */
  Association?: TransitGatewayAssociation;
}

export namespace AssociateTransitGatewayRouteTableResult {
  export const filterSensitiveLog = (obj: AssociateTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

export interface AssociateVpcCidrBlockRequest {
  /**
   * <p>An IPv4 CIDR block to associate with the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter
   *       to limit the CIDR block to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   *          <p> You can have one IPv6 CIDR block association per network border group.</p>
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block.</p>
   */
  AmazonProvidedIpv6CidrBlock?: boolean;

  /**
   * <p>An IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *         <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   */
  Ipv6Pool?: string;
}

export namespace AssociateVpcCidrBlockRequest {
  export const filterSensitiveLog = (obj: AssociateVpcCidrBlockRequest): any => ({
    ...obj,
  });
}

export type VpcCidrBlockStateCode =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed"
  | "failing";

/**
 * <p>Describes the state of a CIDR block.</p>
 */
export interface VpcCidrBlockState {
  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The state of the CIDR block.</p>
   */
  State?: VpcCidrBlockStateCode | string;
}

export namespace VpcCidrBlockState {
  export const filterSensitiveLog = (obj: VpcCidrBlockState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 CIDR block associated with a VPC.</p>
 */
export interface VpcCidrBlockAssociation {
  /**
   * <p>The association ID for the IPv4 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv4 CIDR block.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  CidrBlockState?: VpcCidrBlockState;
}

export namespace VpcCidrBlockAssociation {
  export const filterSensitiveLog = (obj: VpcCidrBlockAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 CIDR block associated with a VPC.</p>
 */
export interface VpcIpv6CidrBlockAssociation {
  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which AWS advertises IP addresses, for example, <code>us-east-1-wl1-bos-wlz-1</code>.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: VpcCidrBlockState;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   */
  Ipv6Pool?: string;

  /**
   * <p>The association ID for the IPv6 CIDR block.</p>
   */
  AssociationId?: string;
}

export namespace VpcIpv6CidrBlockAssociation {
  export const filterSensitiveLog = (obj: VpcIpv6CidrBlockAssociation): any => ({
    ...obj,
  });
}

export interface AssociateVpcCidrBlockResult {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;
}

export namespace AssociateVpcCidrBlockResult {
  export const filterSensitiveLog = (obj: AssociateVpcCidrBlockResult): any => ({
    ...obj,
  });
}

export interface AttachClassicLinkVpcRequest {
  /**
   * <p>The ID of an EC2-Classic instance to link to the ClassicLink-enabled VPC.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of one or more of the VPC's security groups. You cannot specify security groups from a different VPC.</p>
   */
  Groups: string[] | undefined;

  /**
   * <p>The ID of a ClassicLink-enabled VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace AttachClassicLinkVpcRequest {
  export const filterSensitiveLog = (obj: AttachClassicLinkVpcRequest): any => ({
    ...obj,
  });
}

export interface AttachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace AttachClassicLinkVpcResult {
  export const filterSensitiveLog = (obj: AttachClassicLinkVpcResult): any => ({
    ...obj,
  });
}

export interface AttachInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId: string | undefined;
}

export namespace AttachInternetGatewayRequest {
  export const filterSensitiveLog = (obj: AttachInternetGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for AttachNetworkInterface.</p>
 */
export interface AttachNetworkInterfaceRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The index of the device for the network interface attachment.</p>
   */
  DeviceIndex: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace AttachNetworkInterfaceRequest {
  export const filterSensitiveLog = (obj: AttachNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of AttachNetworkInterface.</p>
 */
export interface AttachNetworkInterfaceResult {
  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;
}

export namespace AttachNetworkInterfaceResult {
  export const filterSensitiveLog = (obj: AttachNetworkInterfaceResult): any => ({
    ...obj,
  });
}

export interface AttachVolumeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  Device: string | undefined;

  /**
   * <p>The ID of the EBS volume. The volume and instance must be within the same Availability
   *       Zone.</p>
   */
  VolumeId: string | undefined;
}

export namespace AttachVolumeRequest {
  export const filterSensitiveLog = (obj: AttachVolumeRequest): any => ({
    ...obj,
  });
}

export type VolumeAttachmentState = "attached" | "attaching" | "busy" | "detached" | "detaching";

/**
 * <p>Describes volume attachment details.</p>
 */
export interface VolumeAttachment {
  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The attachment state of the volume.</p>
   */
  State?: VolumeAttachmentState | string;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;
}

export namespace VolumeAttachment {
  export const filterSensitiveLog = (obj: VolumeAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for AttachVpnGateway.</p>
 */
export interface AttachVpnGatewayRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AttachVpnGatewayRequest {
  export const filterSensitiveLog = (obj: AttachVpnGatewayRequest): any => ({
    ...obj,
  });
}

export type AttachmentStatus = "attached" | "attaching" | "detached" | "detaching";

/**
 * <p>Describes an attachment between a virtual private gateway and a VPC.</p>
 */
export interface VpcAttachment {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The current state of the attachment.</p>
   */
  State?: AttachmentStatus | string;
}

export namespace VpcAttachment {
  export const filterSensitiveLog = (obj: VpcAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of AttachVpnGateway.</p>
 */
export interface AttachVpnGatewayResult {
  /**
   * <p>Information about the attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

export namespace AttachVpnGatewayResult {
  export const filterSensitiveLog = (obj: AttachVpnGatewayResult): any => ({
    ...obj,
  });
}

export interface AuthorizeClientVpnIngressRequest {
  /**
   * <p>A brief description of the authorization rule.</p>
   */
  Description?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being authorized.</p>
   */
  TargetNetworkCidr: string | undefined;

  /**
   * <p>Indicates whether to grant access to all clients. Specify <code>true</code> to grant all
   *             clients who successfully establish a VPN connection access to the network. Must be set
   *             to <code>true</code> if <code>AccessGroupId</code> is not specified.</p>
   */
  AuthorizeAllGroups?: boolean;

  /**
   * <p>The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if <code>AuthorizeAllGroups</code> is <code>false</code> or not specified.</p>
   */
  AccessGroupId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;
}

export namespace AuthorizeClientVpnIngressRequest {
  export const filterSensitiveLog = (obj: AuthorizeClientVpnIngressRequest): any => ({
    ...obj,
  });
}

export type ClientVpnAuthorizationRuleStatusCode = "active" | "authorizing" | "failed" | "revoking";

/**
 * <p>Describes the state of an authorization rule.</p>
 */
export interface ClientVpnAuthorizationRuleStatus {
  /**
   * <p>A message about the status of the authorization rule, if applicable.</p>
   */
  Message?: string;

  /**
   * <p>The state of the authorization rule.</p>
   */
  Code?: ClientVpnAuthorizationRuleStatusCode | string;
}

export namespace ClientVpnAuthorizationRuleStatus {
  export const filterSensitiveLog = (obj: ClientVpnAuthorizationRuleStatus): any => ({
    ...obj,
  });
}

export interface AuthorizeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

export namespace AuthorizeClientVpnIngressResult {
  export const filterSensitiveLog = (obj: AuthorizeClientVpnIngressResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 range.</p>
 */
export interface IpRange {
  /**
   * <p>The IPv4 CIDR range. You can either specify a CIDR range or a source security group,
   *             not both. To specify a single IPv4 address, use the /32 prefix length.</p>
   */
  CidrIp?: string;

  /**
   * <p>A description for the security group rule that references this IPv4 address range.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *         spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  Description?: string;
}

export namespace IpRange {
  export const filterSensitiveLog = (obj: IpRange): any => ({
    ...obj,
  });
}

/**
 * <p>[EC2-VPC only] Describes an IPv6 range.</p>
 */
export interface Ipv6Range {
  /**
   * <p>A description for the security group rule that references this IPv6 address range.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *         spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  Description?: string;

  /**
   * <p>The IPv6 CIDR range. You can either specify a CIDR range or a source security group,
   *         not both. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;
}

export namespace Ipv6Range {
  export const filterSensitiveLog = (obj: Ipv6Range): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a prefix list ID.</p>
 */
export interface PrefixListId {
  /**
   * <p>A description for the security group rule that references this prefix list ID.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *       spaces, and ._-:/()#,@[]+=;{}!$*</p>
   */
  Description?: string;

  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;
}

export namespace PrefixListId {
  export const filterSensitiveLog = (obj: PrefixListId): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group and AWS account ID pair.</p>
 */
export interface UserIdGroupPair {
  /**
   * <p>A description for the security group rule that references this user ID group
   * 			pair.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *       spaces, and ._-:/()#,@[]+=;{}!$*</p>
   */
  Description?: string;

  /**
   * <p>The ID of the VPC for the referenced security group, if applicable.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of an AWS account.</p>
   *         <p>For a referenced security group in another VPC, the account ID of the referenced
   *             security group is returned in the response. If the referenced security group is deleted,
   *             this value is not returned.</p>
   *          <p>[EC2-Classic] Required when adding or removing rules that reference a security group
   *             in another AWS account.</p>
   */
  UserId?: string;

  /**
   * <p>The name of the security group. In a request, use this parameter for a security group
   *             in EC2-Classic or a default VPC only. For a security group in a nondefault VPC, use the
   *             security group ID. </p>
   *         <p>For a referenced security group in another VPC, this value is not returned if the
   *             referenced security group is deleted.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the VPC peering connection, if applicable.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   */
  PeeringStatus?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;
}

export namespace UserIdGroupPair {
  export const filterSensitiveLog = (obj: UserIdGroupPair): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a set of permissions for a security group rule.</p>
 */
export interface IpPermission {
  /**
   * <p>[VPC only] The IPv6 ranges.</p>
   */
  Ipv6Ranges?: Ipv6Range[];

  /**
   * <p>The security group and AWS account ID pairs.</p>
   */
  UserIdGroupPairs?: UserIdGroupPair[];

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.
   *         A value of <code>-1</code> indicates all ICMP/ICMPv6 types. If you specify all
   * 		ICMP/ICMPv6 types, you must specify all codes.</p>
   */
  FromPort?: number;

  /**
   * <p>[VPC only] The prefix list IDs.</p>
   */
  PrefixListIds?: PrefixListId[];

  /**
   * <p>The IPv4 ranges.</p>
   */
  IpRanges?: IpRange[];

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value
   * 		of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types,
   *         you must specify all codes.</p>
   */
  ToPort?: number;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>)
   *         or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).</p>
   *          <p>[VPC only] Use <code>-1</code> to specify all protocols. When authorizing
   *         security group rules, specifying <code>-1</code> or a protocol number other than
   *         <code>tcp</code>, <code>udp</code>, <code>icmp</code>, or <code>icmpv6</code> allows
   *         traffic on all ports, regardless of any port range you specify. For <code>tcp</code>,
   *         <code>udp</code>, and <code>icmp</code>, you must specify a port range. For <code>icmpv6</code>,
   *         the port range is optional; if you omit the port range, traffic for all types and codes is allowed.</p>
   */
  IpProtocol?: string;
}

export namespace IpPermission {
  export const filterSensitiveLog = (obj: IpPermission): any => ({
    ...obj,
  });
}

export interface AuthorizeSecurityGroupEgressRequest {
  /**
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or
   *             number.</p>
   */
  IpProtocol?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  ToPort?: number;

  /**
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP
   *             address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   */
  CidrIp?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *             destination security group.</p>
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *             destination security group.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  FromPort?: number;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;
}

export namespace AuthorizeSecurityGroupEgressRequest {
  export const filterSensitiveLog = (obj: AuthorizeSecurityGroupEgressRequest): any => ({
    ...obj,
  });
}

export interface AuthorizeSecurityGroupIngressRequest {
  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the source security group. You can't specify this parameter
   *          in combination with the following parameters: the CIDR IP address range, the start of the port range,
   *          the IP protocol, and the end of the port range. Creates rules that grant full ICMP, UDP, and TCP access.
   *          To create a rule with a specific IP protocol and port range, use a set of IP permissions instead. For
   *          EC2-VPC, the source security group must be in the same VPC.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP code number.
   * 			For the ICMP code number, use <code>-1</code> to specify all codes. If you
   * 			specify all ICMP types, you must specify all codes.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  ToPort?: number;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP type number.
   * 			For the ICMP type number, use <code>-1</code> to specify all types. If you
   * 			specify all ICMP types, you must specify all codes.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  FromPort?: number;

  /**
   * <p>The sets of IP permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *       (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). To specify <code>icmpv6</code>, use a set of IP permissions.</p>
   *          <p>[VPC only] Use <code>-1</code> to specify all protocols. If you specify <code>-1</code> or a
   *          protocol other than <code>tcp</code>, <code>udp</code>, or <code>icmp</code>, traffic on all ports
   *          is allowed, regardless of any ports you specify.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  IpProtocol?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   * 			security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>[nondefault VPC] The AWS account ID for the source security group, if the source security group is
   *          in a different account. You can't specify this parameter in combination with the following parameters:
   *          the CIDR IP address range, the IP protocol, the start of the port range, and the end of the port range.
   *          Creates rules that grant full ICMP, UDP, and TCP access. To create a rule with a specific IP protocol
   *          and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * <p>The IPv4 address range, in CIDR format. You can't specify this parameter when specifying a source
   *       security group. To specify an IPv6 address range, use a set of IP permissions.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  CidrIp?: string;
}

export namespace AuthorizeSecurityGroupIngressRequest {
  export const filterSensitiveLog = (obj: AuthorizeSecurityGroupIngressRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the storage parameters for S3 and S3 buckets for an instance store-backed AMI.</p>
 */
export interface S3Storage {
  /**
   * <p>The beginning of the file name of the AMI.</p>
   */
  Prefix?: string;

  /**
   * <p>The access key ID of the owner of the bucket. Before you specify a value for your access key ID, review and follow the guidance
   *        in <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html">Best Practices for Managing AWS Access Keys</a>.</p>
   */
  AWSAccessKeyId?: string;

  /**
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
   */
  Bucket?: string;

  /**
   * <p>An Amazon S3 upload policy that gives Amazon EC2 permission to upload items into Amazon S3 on your behalf.</p>
   */
  UploadPolicy?: Uint8Array;

  /**
   * <p>The signature of the JSON document.</p>
   */
  UploadPolicySignature?: string;
}

export namespace S3Storage {
  export const filterSensitiveLog = (obj: S3Storage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the storage location for an instance store-backed AMI.</p>
 */
export interface Storage {
  /**
   * <p>An Amazon S3 storage location.</p>
   */
  S3?: S3Storage;
}

export namespace Storage {
  export const filterSensitiveLog = (obj: Storage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for BundleInstance.</p>
 */
export interface BundleInstanceRequest {
  /**
   * <p>The ID of the instance to bundle.</p>
   *          <p>Type: String</p>
   *          <p>Default: None</p>
   *          <p>Required: Yes</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
   */
  Storage: Storage | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace BundleInstanceRequest {
  export const filterSensitiveLog = (obj: BundleInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error for <a>BundleInstance</a>.</p>
 */
export interface BundleTaskError {
  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * <p>The error code.</p>
   */
  Code?: string;
}

export namespace BundleTaskError {
  export const filterSensitiveLog = (obj: BundleTaskError): any => ({
    ...obj,
  });
}

export type BundleTaskState =
  | "bundling"
  | "cancelling"
  | "complete"
  | "failed"
  | "pending"
  | "storing"
  | "waiting-for-shutdown";

/**
 * <p>Describes a bundle task.</p>
 */
export interface BundleTask {
  /**
   * <p>The level of task completion, as a percent (for example, 20%).</p>
   */
  Progress?: string;

  /**
   * <p>The ID of the bundle task.</p>
   */
  BundleId?: string;

  /**
   * <p>The Amazon S3 storage locations.</p>
   */
  Storage?: Storage;

  /**
   * <p>The ID of the instance associated with this bundle task.</p>
   */
  InstanceId?: string;

  /**
   * <p>The state of the task.</p>
   */
  State?: BundleTaskState | string;

  /**
   * <p>The time this task started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time of the most recent update for the task.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>If the task fails, a description of the error.</p>
   */
  BundleTaskError?: BundleTaskError;
}

export namespace BundleTask {
  export const filterSensitiveLog = (obj: BundleTask): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of BundleInstance.</p>
 */
export interface BundleInstanceResult {
  /**
   * <p>Information about the bundle task.</p>
   */
  BundleTask?: BundleTask;
}

export namespace BundleInstanceResult {
  export const filterSensitiveLog = (obj: BundleInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CancelBundleTask.</p>
 */
export interface CancelBundleTaskRequest {
  /**
   * <p>The ID of the bundle task.</p>
   */
  BundleId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CancelBundleTaskRequest {
  export const filterSensitiveLog = (obj: CancelBundleTaskRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CancelBundleTask.</p>
 */
export interface CancelBundleTaskResult {
  /**
   * <p>Information about the bundle task.</p>
   */
  BundleTask?: BundleTask;
}

export namespace CancelBundleTaskResult {
  export const filterSensitiveLog = (obj: CancelBundleTaskResult): any => ({
    ...obj,
  });
}

export interface CancelCapacityReservationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the Capacity Reservation to be cancelled.</p>
   */
  CapacityReservationId: string | undefined;
}

export namespace CancelCapacityReservationRequest {
  export const filterSensitiveLog = (obj: CancelCapacityReservationRequest): any => ({
    ...obj,
  });
}

export interface CancelCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace CancelCapacityReservationResult {
  export const filterSensitiveLog = (obj: CancelCapacityReservationResult): any => ({
    ...obj,
  });
}

export interface CancelConversionRequest {
  /**
   * <p>The reason for canceling the conversion task.</p>
   */
  ReasonMessage?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the conversion task.</p>
   */
  ConversionTaskId: string | undefined;
}

export namespace CancelConversionRequest {
  export const filterSensitiveLog = (obj: CancelConversionRequest): any => ({
    ...obj,
  });
}

export interface CancelExportTaskRequest {
  /**
   * <p>The ID of the export task. This is the ID returned by <code>CreateInstanceExportTask</code>.</p>
   */
  ExportTaskId: string | undefined;
}

export namespace CancelExportTaskRequest {
  export const filterSensitiveLog = (obj: CancelExportTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelImportTaskRequest {
  /**
   * <p>The ID of the import image or import snapshot task to be canceled.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The reason for canceling the task.</p>
   */
  CancelReason?: string;
}

export namespace CancelImportTaskRequest {
  export const filterSensitiveLog = (obj: CancelImportTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelImportTaskResult {
  /**
   * <p>The current state of the task being canceled.</p>
   */
  State?: string;

  /**
   * <p>The ID of the task being canceled.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The current state of the task being canceled.</p>
   */
  PreviousState?: string;
}

export namespace CancelImportTaskResult {
  export const filterSensitiveLog = (obj: CancelImportTaskResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CancelReservedInstancesListing.</p>
 */
export interface CancelReservedInstancesListingRequest {
  /**
   * <p>The ID of the Reserved Instance listing.</p>
   */
  ReservedInstancesListingId: string | undefined;
}

export namespace CancelReservedInstancesListingRequest {
  export const filterSensitiveLog = (obj: CancelReservedInstancesListingRequest): any => ({
    ...obj,
  });
}

export type ListingState = "available" | "cancelled" | "pending" | "sold";

/**
 * <p>Describes a Reserved Instance listing state.</p>
 */
export interface InstanceCount {
  /**
   * <p>The number of listed Reserved Instances in the state specified by the <code>state</code>.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The states of the listed Reserved Instances.</p>
   */
  State?: ListingState | string;
}

export namespace InstanceCount {
  export const filterSensitiveLog = (obj: InstanceCount): any => ({
    ...obj,
  });
}

export type CurrencyCodeValues = "USD";

/**
 * <p>Describes the price for a Reserved Instance.</p>
 */
export interface PriceSchedule {
  /**
   * <p>The currency for transacting the Reserved Instance resale.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The fixed price for the term.</p>
   */
  Price?: number;

  /**
   * <p>The current price schedule, as determined by the term remaining for the Reserved Instance in the listing.</p>
   *          <p>A specific price schedule is always in effect, but only one price schedule can be active at any time. Take, for example, a Reserved Instance listing that has five months remaining in its term. When you specify price schedules for five months and two months, this means that schedule 1, covering the first three months of the remaining term, will be active during months 5, 4, and 3. Then schedule 2, covering the last two months of the term, will be active for months 2 and 1.</p>
   */
  Active?: boolean;

  /**
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
   */
  Term?: number;
}

export namespace PriceSchedule {
  export const filterSensitiveLog = (obj: PriceSchedule): any => ({
    ...obj,
  });
}

export type ListingStatus = "active" | "cancelled" | "closed" | "pending";

/**
 * <p>Describes a Reserved Instance listing.</p>
 */
export interface ReservedInstancesListing {
  /**
   * <p>The price of the Reserved Instance listing.</p>
   */
  PriceSchedules?: PriceSchedule[];

  /**
   * <p>The number of instances in this state.</p>
   */
  InstanceCounts?: InstanceCount[];

  /**
   * <p>The last modified timestamp of the listing.</p>
   */
  UpdateDate?: Date;

  /**
   * <p>The ID of the Reserved Instance listing.</p>
   */
  ReservedInstancesListingId?: string;

  /**
   * <p>The time the listing was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The status of the Reserved Instance listing.</p>
   */
  Status?: ListingStatus | string;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is
   * 			idempotent. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The reason for the current status of the Reserved Instance listing. The response can be blank.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

export namespace ReservedInstancesListing {
  export const filterSensitiveLog = (obj: ReservedInstancesListing): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CancelReservedInstancesListing.</p>
 */
export interface CancelReservedInstancesListingResult {
  /**
   * <p>The Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

export namespace CancelReservedInstancesListingResult {
  export const filterSensitiveLog = (obj: CancelReservedInstancesListingResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CancelSpotFleetRequests.</p>
 */
export interface CancelSpotFleetRequestsRequest {
  /**
   * <p>Indicates whether to terminate instances for a Spot Fleet request if it is canceled successfully.</p>
   */
  TerminateInstances: boolean | undefined;

  /**
   * <p>The IDs of the Spot Fleet requests.</p>
   */
  SpotFleetRequestIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CancelSpotFleetRequestsRequest {
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsRequest): any => ({
    ...obj,
  });
}

export enum BatchState {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  CANCELLED_RUNNING = "cancelled_running",
  CANCELLED_TERMINATING_INSTANCES = "cancelled_terminating",
  FAILED = "failed",
  MODIFYING = "modifying",
  SUBMITTED = "submitted",
}

/**
 * <p>Describes a Spot Fleet request that was successfully canceled.</p>
 */
export interface CancelSpotFleetRequestsSuccessItem {
  /**
   * <p>The current state of the Spot Fleet request.</p>
   */
  CurrentSpotFleetRequestState?: BatchState | string;

  /**
   * <p>The previous state of the Spot Fleet request.</p>
   */
  PreviousSpotFleetRequestState?: BatchState | string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export namespace CancelSpotFleetRequestsSuccessItem {
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsSuccessItem): any => ({
    ...obj,
  });
}

export enum CancelBatchErrorCode {
  FLEET_REQUEST_ID_DOES_NOT_EXIST = "fleetRequestIdDoesNotExist",
  FLEET_REQUEST_ID_MALFORMED = "fleetRequestIdMalformed",
  FLEET_REQUEST_NOT_IN_CANCELLABLE_STATE = "fleetRequestNotInCancellableState",
  UNEXPECTED_ERROR = "unexpectedError",
}

/**
 * <p>Describes a Spot Fleet error.</p>
 */
export interface CancelSpotFleetRequestsError {
  /**
   * <p>The error code.</p>
   */
  Code?: CancelBatchErrorCode | string;

  /**
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

export namespace CancelSpotFleetRequestsError {
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Fleet request that was not successfully canceled.</p>
 */
export interface CancelSpotFleetRequestsErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: CancelSpotFleetRequestsError;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export namespace CancelSpotFleetRequestsErrorItem {
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CancelSpotFleetRequests.</p>
 */
export interface CancelSpotFleetRequestsResponse {
  /**
   * <p>Information about the Spot Fleet requests that are successfully canceled.</p>
   */
  SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[];

  /**
   * <p>Information about the Spot Fleet requests that are not successfully canceled.</p>
   */
  UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[];
}

export namespace CancelSpotFleetRequestsResponse {
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CancelSpotInstanceRequests.</p>
 */
export interface CancelSpotInstanceRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more Spot Instance request IDs.</p>
   */
  SpotInstanceRequestIds: string[] | undefined;
}

export namespace CancelSpotInstanceRequestsRequest {
  export const filterSensitiveLog = (obj: CancelSpotInstanceRequestsRequest): any => ({
    ...obj,
  });
}

export type CancelSpotInstanceRequestState = "active" | "cancelled" | "closed" | "completed" | "open";

/**
 * <p>Describes a request to cancel a Spot Instance.</p>
 */
export interface CancelledSpotInstanceRequest {
  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The state of the Spot Instance request.</p>
   */
  State?: CancelSpotInstanceRequestState | string;
}

export namespace CancelledSpotInstanceRequest {
  export const filterSensitiveLog = (obj: CancelledSpotInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CancelSpotInstanceRequests.</p>
 */
export interface CancelSpotInstanceRequestsResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  CancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[];
}

export namespace CancelSpotInstanceRequestsResult {
  export const filterSensitiveLog = (obj: CancelSpotInstanceRequestsResult): any => ({
    ...obj,
  });
}

export interface ConfirmProductInstanceRequest {
  /**
   * <p>The product code. This must be a product code that you own.</p>
   */
  ProductCode: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ConfirmProductInstanceRequest {
  export const filterSensitiveLog = (obj: ConfirmProductInstanceRequest): any => ({
    ...obj,
  });
}

export interface ConfirmProductInstanceResult {
  /**
   * <p>The AWS account ID of the instance owner. This is only present if the product code is
   *             attached to the instance.</p>
   */
  OwnerId?: string;

  /**
   * <p>The return value of the request. Returns <code>true</code> if the specified product
   *             code is owned by the requester and associated with the specified instance.</p>
   */
  Return?: boolean;
}

export namespace ConfirmProductInstanceResult {
  export const filterSensitiveLog = (obj: ConfirmProductInstanceResult): any => ({
    ...obj,
  });
}

export interface CopyFpgaImageRequest {
  /**
   * <p>The ID of the source AFI.</p>
   */
  SourceFpgaImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name for the new AFI. The default is the name of the source AFI.</p>
   */
  Name?: string;

  /**
   * <p>The description for the new AFI.</p>
   */
  Description?: string;

  /**
   * <p>The Region that contains the source AFI.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CopyFpgaImageRequest {
  export const filterSensitiveLog = (obj: CopyFpgaImageRequest): any => ({
    ...obj,
  });
}

export interface CopyFpgaImageResult {
  /**
   * <p>The ID of the new AFI.</p>
   */
  FpgaImageId?: string;
}

export namespace CopyFpgaImageResult {
  export const filterSensitiveLog = (obj: CopyFpgaImageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CopyImage.</p>
 */
export interface CopyImageRequest {
  /**
   * <p>The name of the Region that contains the AMI to copy.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>A description for the new AMI in the destination Region.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>An identifier for the symmetric AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating
   *       the encrypted volume. This parameter is only required if you want to use a non-default CMK; if
   *       this parameter is not specified, the default CMK for EBS is used. If a <code>KmsKeyId</code>
   *       is specified, the <code>Encrypted</code> flag must also be set. </p>
   *    	     <p>To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN.
   *    		When using an alias name, prefix it with "alias/". For example:</p>
   *    	     <ul>
   *             <li>
   *    			         <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *    		       </li>
   *             <li>
   *    			         <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *    		       </li>
   *             <li>
   *    			         <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *    		       </li>
   *             <li>
   *    			         <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *    		       </li>
   *          </ul>
   *          <p>AWS parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may
   *       appear to complete even though you provided an invalid identifier. This action will eventually
   *       report failure. </p>
   *          <p>The specified CMK must exist in the Region that the snapshot is being copied to. </p>
   *          <p>Amazon EBS does not support asymmetric CMKs.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether the destination snapshots of the copied image should be encrypted.
   *        You can encrypt a copy of an unencrypted snapshot, but you cannot create an unencrypted
   *        copy of an encrypted snapshot. The default CMK for EBS is used unless you specify a non-default
   *        AWS Key Management Service (AWS KMS) CMK using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The ID of the AMI to copy.</p>
   */
  SourceImageId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   * 				idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure Idempotency</a> in the
   * 			  <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the new AMI in the destination Region.</p>
   */
  Name: string | undefined;
}

export namespace CopyImageRequest {
  export const filterSensitiveLog = (obj: CopyImageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CopyImage.</p>
 */
export interface CopyImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   */
  ImageId?: string;
}

export namespace CopyImageResult {
  export const filterSensitiveLog = (obj: CopyImageResult): any => ({
    ...obj,
  });
}

export interface CopySnapshotRequest {
  /**
   * <p>When you copy an encrypted source snapshot using the Amazon EC2 Query API, you must supply a
   *       pre-signed URL. This parameter is optional for unencrypted snapshots. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html">Query
   *         Requests</a>.</p>
   *          <p>The <code>PresignedUrl</code> should use the snapshot source endpoint, the
   *         <code>CopySnapshot</code> action, and include the <code>SourceRegion</code>,
   *         <code>SourceSnapshotId</code>, and <code>DestinationRegion</code> parameters. The
   *         <code>PresignedUrl</code> must be signed using AWS Signature Version 4. Because EBS
   *       snapshots are stored in Amazon S3, the signing algorithm for this parameter uses the same logic
   *       that is described in <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests by Using Query
   *         Parameters (AWS Signature Version 4)</a> in the <i>Amazon Simple Storage Service API Reference</i>. An
   *       invalid or improperly signed <code>PresignedUrl</code> will cause the copy operation to fail
   *       asynchronously, and the snapshot will move to an <code>error</code> state.</p>
   */
  PresignedUrl?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A description for the EBS snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The tags to apply to the new snapshot.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption.
   *       If this parameter is not specified, your AWS managed CMK for EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the CMK using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *          </ul>
   *          <p>AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled,
   *       enable encryption using this parameter. Otherwise, omit this parameter. Encrypted snapshots
   *       are encrypted, even if you omit this parameter and encryption by default is not enabled. You
   *       cannot set this parameter to false. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The ID of the EBS snapshot to copy.</p>
   */
  SourceSnapshotId: string | undefined;

  /**
   * <p>The ID of the Region that contains the snapshot to be copied.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>The destination Region to use in the <code>PresignedUrl</code> parameter of a snapshot
   *       copy operation. This parameter is only valid for specifying the destination Region in a
   *         <code>PresignedUrl</code> parameter, where it is required.</p>
   *
   *          <p>The snapshot copy is sent to the regional endpoint that you sent the HTTP
   *       request to (for example, <code>ec2.us-east-1.amazonaws.com</code>). With the AWS CLI, this is
   *       specified using the <code>--region</code> parameter or the default Region in your AWS
   *       configuration file.</p>
   */
  DestinationRegion?: string;
}

export namespace CopySnapshotRequest {
  export const filterSensitiveLog = (obj: CopySnapshotRequest): any => ({
    ...obj,
  });
}

export interface CopySnapshotResult {
  /**
   * <p>Any tags applied to the new snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the new snapshot.</p>
   */
  SnapshotId?: string;
}

export namespace CopySnapshotResult {
  export const filterSensitiveLog = (obj: CopySnapshotResult): any => ({
    ...obj,
  });
}

export type EndDateType = "limited" | "unlimited";

export type InstanceMatchCriteria = "open" | "targeted";

export enum CapacityReservationInstancePlatform {
  LINUX_UNIX = "Linux/UNIX",
  LINUX_WITH_SQL_SERVER_ENTERPRISE = "Linux with SQL Server Enterprise",
  LINUX_WITH_SQL_SERVER_STANDARD = "Linux with SQL Server Standard",
  LINUX_WITH_SQL_SERVER_WEB = "Linux with SQL Server Web",
  RED_HAT_ENTERPRISE_LINUX = "Red Hat Enterprise Linux",
  SUSE_LINUX = "SUSE Linux",
  WINDOWS = "Windows",
  WINDOWS_WITH_SQL_SERVER = "Windows with SQL Server",
  WINDOWS_WITH_SQL_SERVER_ENTERPRISE = "Windows with SQL Server Enterprise",
  WINDOWS_WITH_SQL_SERVER_STANDARD = "Windows with SQL Server Standard",
  WINDOWS_WITH_SQL_SERVER_WEB = "Windows with SQL Server Web",
}

export type CapacityReservationTenancy = "dedicated" | "default";

export interface CreateCapacityReservationRequest {
  /**
   * <p>The number of instances for which to reserve capacity.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
   * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
   * 			optimal I/O performance. This optimization isn't available with all instance types.
   * 			Additional usage charges apply when using an EBS- optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The ID of the Availability Zone in which to create the Capacity Reservation.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   * 		       <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   *
   * 		       <p>If the <code>EndDateType</code> is <code>limited</code>, the Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify
   * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   */
  EndDate?: Date;

  /**
   * <p>The instance type for which to reserve capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   * 				Types</a> in the <i>Amazon Elastic Compute Cloud User
   * 			Guide</i>.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
   * 			include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The Capacity Reservation automatically matches all instances that have matching attributes (instance type, platform,
   * 				and Availability Zone). Instances that have matching attributes run in the Capacity Reservation automatically without specifying
   * 				any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
   * 					(instance type, platform, and Availability Zone), and explicitly target the
   * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   * 		       <p>Default: <code>open</code>
   *          </p>
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to apply to the Capacity Reservation during launch.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether the Capacity Reservation supports instances with temporary, block-level
   * 			storage.</p>
   */
  EphemeralStorage?: boolean;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other AWS accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single AWS account.</p>
   *             </li>
   *          </ul>
   */
  Tenancy?: CapacityReservationTenancy | string;

  /**
   * <p>The Availability Zone in which to create the Capacity Reservation.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not
   * 					provide an <code>EndDate</code> if the <code>EndDateType</code> is
   * 						<code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must
   * 					provide an <code>EndDate</code> value if the <code>EndDateType</code> value is
   * 						<code>limited</code>.</p>
   *             </li>
   *          </ul>
   */
  EndDateType?: EndDateType | string;

  /**
   * <p>The type of operating system for which to reserve capacity.</p>
   */
  InstancePlatform: CapacityReservationInstancePlatform | string | undefined;
}

export namespace CreateCapacityReservationRequest {
  export const filterSensitiveLog = (obj: CreateCapacityReservationRequest): any => ({
    ...obj,
  });
}

export type CapacityReservationState = "active" | "cancelled" | "expired" | "failed" | "pending";

/**
 * <p>Describes a Capacity Reservation.</p>
 */
export interface CapacityReservation {
  /**
   * <p>Indicates whether the Capacity Reservation supports instances with temporary, block-level
   * 			storage.</p>
   */
  EphemeralStorage?: boolean;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
   * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
   * 			optimal I/O performance. This optimization isn't available with all instance types.
   * 			Additional usage charges apply when using an EBS- optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The total number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The Availability Zone in which the capacity is reserved.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
   * 			include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform,
   * 				and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying
   * 				any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
   * 					(instance type, platform, and Availability Zone), and explicitly target the
   * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | string;

  /**
   * <p>Any tags assigned to the Capacity Reservation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other AWS accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single AWS account.</p>
   *             </li>
   *          </ul>
   */
  Tenancy?: CapacityReservationTenancy | string;

  /**
   * <p>The Availability Zone ID of the Capacity Reservation.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The ID of the AWS account that owns the Capacity Reservation.</p>
   */
  OwnerId?: string;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
   *             </li>
   *          </ul>
   */
  EndDateType?: EndDateType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Capacity Reservation.</p>
   */
  CapacityReservationArn?: string;

  /**
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - The Capacity Reservation is active and the capacity is available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified
   * 					in your request. The reserved capacity is no longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation was manually cancelled. The reserved capacity is no
   * 					longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The Capacity Reservation request was successful but the capacity
   * 					provisioning is still pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation request has failed. A request might fail
   * 					due to invalid request parameters, capacity constraints, or instance limit constraints.
   * 					Failed requests are retained for 60 minutes.</p>
   *             </li>
   *          </ul>
   */
  State?: CapacityReservationState | string;

  /**
   * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
   */
  InstancePlatform?: CapacityReservationInstancePlatform | string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: string;
}

export namespace CapacityReservation {
  export const filterSensitiveLog = (obj: CapacityReservation): any => ({
    ...obj,
  });
}

export interface CreateCapacityReservationResult {
  /**
   * <p>Information about the Capacity Reservation.</p>
   */
  CapacityReservation?: CapacityReservation;
}

export namespace CreateCapacityReservationResult {
  export const filterSensitiveLog = (obj: CreateCapacityReservationResult): any => ({
    ...obj,
  });
}

export interface CreateCarrierGatewayRequest {
  /**
   * <p>The tags to associate with the carrier gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The ID of the VPC to associate with the carrier gateway.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateCarrierGatewayRequest {
  export const filterSensitiveLog = (obj: CreateCarrierGatewayRequest): any => ({
    ...obj,
  });
}

export type CarrierGatewayState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a carrier gateway.</p>
 */
export interface CarrierGateway {
  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The AWS account ID of the owner of the carrier gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the carrier gateway.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The state of the carrier gateway.</p>
   */
  State?: CarrierGatewayState | string;

  /**
   * <p>The ID of the VPC associated with the carrier gateway.</p>
   */
  VpcId?: string;
}

export namespace CarrierGateway {
  export const filterSensitiveLog = (obj: CarrierGateway): any => ({
    ...obj,
  });
}

export interface CreateCarrierGatewayResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateway?: CarrierGateway;
}

export namespace CreateCarrierGatewayResult {
  export const filterSensitiveLog = (obj: CreateCarrierGatewayResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Active Directory to be used for client authentication.</p>
 */
export interface DirectoryServiceAuthenticationRequest {
  /**
   * <p>The ID of the Active Directory to be used for authentication.</p>
   */
  DirectoryId?: string;
}

export namespace DirectoryServiceAuthenticationRequest {
  export const filterSensitiveLog = (obj: DirectoryServiceAuthenticationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The IAM SAML identity provider used for federated authentication.</p>
 */
export interface FederatedAuthenticationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
   */
  SAMLProviderArn?: string;
}

export namespace FederatedAuthenticationRequest {
  export const filterSensitiveLog = (obj: FederatedAuthenticationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the client certificate to be used for authentication.</p>
 */
export interface CertificateAuthenticationRequest {
  /**
   * <p>The ARN of the client certificate. The certificate must be signed by a certificate
   * 			authority (CA) and it must be provisioned in AWS Certificate Manager (ACM).</p>
   */
  ClientRootCertificateChainArn?: string;
}

export namespace CertificateAuthenticationRequest {
  export const filterSensitiveLog = (obj: CertificateAuthenticationRequest): any => ({
    ...obj,
  });
}

export type ClientVpnAuthenticationType =
  | "certificate-authentication"
  | "directory-service-authentication"
  | "federated-authentication";

/**
 * <p>Describes the authentication method to be used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication">Authentication</a>
 * 			in the <i>AWS Client VPN Administrator Guide</i>.</p>
 */
export interface ClientVpnAuthenticationRequest {
  /**
   * <p>Information about the Active Directory to be used, if applicable. You must provide this information if <b>Type</b> is <code>directory-service-authentication</code>.</p>
   */
  ActiveDirectory?: DirectoryServiceAuthenticationRequest;

  /**
   * <p>Information about the IAM SAML identity provider to be used, if applicable. You must provide this information if <b>Type</b> is <code>federated-authentication</code>.</p>
   */
  FederatedAuthentication?: FederatedAuthenticationRequest;

  /**
   * <p>Information about the authentication certificates to be used, if applicable. You must provide this information if <b>Type</b> is <code>certificate-authentication</code>.</p>
   */
  MutualAuthentication?: CertificateAuthenticationRequest;

  /**
   * <p>The type of client authentication to be used.</p>
   */
  Type?: ClientVpnAuthenticationType | string;
}

export namespace ClientVpnAuthenticationRequest {
  export const filterSensitiveLog = (obj: ClientVpnAuthenticationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the client connection logging options for the Client VPN endpoint.</p>
 */
export interface ConnectionLogOptions {
  /**
   * <p>The name of the CloudWatch Logs log group. Required if connection logging is enabled.</p>
   */
  CloudwatchLogGroup?: string;

  /**
   * <p>The name of the CloudWatch Logs log stream to which the connection data is published.</p>
   */
  CloudwatchLogStream?: string;

  /**
   * <p>Indicates whether connection logging is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace ConnectionLogOptions {
  export const filterSensitiveLog = (obj: ConnectionLogOptions): any => ({
    ...obj,
  });
}

export type TransportProtocol = "tcp" | "udp";

export interface CreateClientVpnEndpointRequest {
  /**
   * <p>A brief description of the Client VPN endpoint.</p>
   */
  Description?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ARN of the server certificate. For more information, see
   * 			the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager User Guide</a>.</p>
   */
  ServerCertificateArn: string | undefined;

  /**
   * <p>The tags to apply to the Client VPN endpoint during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.</p>
   */
  ClientCidrBlock: string | undefined;

  /**
   * <p>The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.</p>
   * 		       <p>By default, split-tunnel on a VPN endpoint is disabled.</p>
   * 		       <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel AWS Client VPN Endpoint</a> in the <i>AWS
   * 				Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can
   * 			have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.</p>
   */
  DnsServers?: string[];

  /**
   * <p>The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.</p>
   */
  VpcId?: string;

  /**
   * <p>Information about the client connection logging options.</p>
   * 		       <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   * 		       <ul>
   *             <li>
   *                <p>Client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection results (successful and unsuccessful)</p>
   *             </li>
   *             <li>
   *                <p>Reasons for unsuccessful client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection termination time</p>
   *             </li>
   *          </ul>
   */
  ConnectionLogOptions: ConnectionLogOptions | undefined;

  /**
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   * 	        <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   * 	        <p>Default Value: <code>443</code>
   *          </p>
   */
  VpnPort?: number;

  /**
   * <p>The transport protocol to be used by the VPN session.</p>
   * 		       <p>Default value: <code>udp</code>
   *          </p>
   */
  TransportProtocol?: TransportProtocol | string;

  /**
   * <p>Information about the authentication method to be used to authenticate clients.</p>
   */
  AuthenticationOptions: ClientVpnAuthenticationRequest[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateClientVpnEndpointRequest {
  export const filterSensitiveLog = (obj: CreateClientVpnEndpointRequest): any => ({
    ...obj,
  });
}

export type ClientVpnEndpointStatusCode = "available" | "deleted" | "deleting" | "pending-associate";

/**
 * <p>Describes the state of a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpointStatus {
  /**
   * <p>A message about the status of the Client VPN endpoint.</p>
   */
  Message?: string;

  /**
   * <p>The state of the Client VPN endpoint. Possible states include:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>pending-associate</code> - The Client VPN endpoint has been created but no target networks
   * 					have been associated. The Client VPN endpoint cannot accept connections.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>available</code> - The Client VPN endpoint has been created and a target network has been
   * 					associated. The Client VPN endpoint can accept connections.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>deleting</code> - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   *             </li>
   *             <li>
   * 				           <p>
   *                   <code>deleted</code> - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   * 			         </li>
   *          </ul>
   */
  Code?: ClientVpnEndpointStatusCode | string;
}

export namespace ClientVpnEndpointStatus {
  export const filterSensitiveLog = (obj: ClientVpnEndpointStatus): any => ({
    ...obj,
  });
}

export interface CreateClientVpnEndpointResult {
  /**
   * <p>The DNS name to be used by clients when establishing their VPN session.</p>
   */
  DnsName?: string;

  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;
}

export namespace CreateClientVpnEndpointResult {
  export const filterSensitiveLog = (obj: CreateClientVpnEndpointResult): any => ({
    ...obj,
  });
}

export interface CreateClientVpnRouteRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A brief description of the route.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the Client VPN endpoint to which to add the route.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination. For example:</p>
   * 		       <ul>
   *             <li>
   *                <p>To add a route for Internet access, enter <code>0.0.0.0/0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>To add a route for a peered VPC, enter the peered VPC's IPv4 CIDR range</p>
   *             </li>
   *             <li>
   *                <p>To add a route for an on-premises network, enter the AWS Site-to-Site VPN connection's IPv4 CIDR range</p>
   *             </li>
   *             <li>
   *                <p>To add a route for the local network, enter the client CIDR range</p>
   *             </li>
   *          </ul>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the subnet through which you want to route traffic. The specified subnet must be
   * 			an existing target network of the Client VPN endpoint.</p>
   * 	        <p>Alternatively, if you're adding a route for the local network, specify <code>local</code>.</p>
   */
  TargetVpcSubnetId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateClientVpnRouteRequest {
  export const filterSensitiveLog = (obj: CreateClientVpnRouteRequest): any => ({
    ...obj,
  });
}

export type ClientVpnRouteStatusCode = "active" | "creating" | "deleting" | "failed";

/**
 * <p>Describes the state of a Client VPN endpoint route.</p>
 */
export interface ClientVpnRouteStatus {
  /**
   * <p>The state of the Client VPN endpoint route.</p>
   */
  Code?: ClientVpnRouteStatusCode | string;

  /**
   * <p>A message about the status of the Client VPN endpoint route, if applicable.</p>
   */
  Message?: string;
}

export namespace ClientVpnRouteStatus {
  export const filterSensitiveLog = (obj: ClientVpnRouteStatus): any => ({
    ...obj,
  });
}

export interface CreateClientVpnRouteResult {
  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;
}

export namespace CreateClientVpnRouteResult {
  export const filterSensitiveLog = (obj: CreateClientVpnRouteResult): any => ({
    ...obj,
  });
}

export type GatewayType = "ipsec.1";

/**
 * <p>Contains the parameters for CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayRequest {
  /**
   * <p>The Internet-routable IP address for the customer gateway's outside interface. The address must be static.</p>
   */
  PublicIp?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>A name for the customer gateway device.</p>
   *         <p>Length Constraints: Up to 255 characters.</p>
   */
  DeviceName?: string;

  /**
   * <p>For devices that support BGP, the customer gateway's BGP ASN.</p>
   *         <p>Default: 65000</p>
   */
  BgpAsn: number | undefined;

  /**
   * <p>The type of VPN connection that this customer gateway supports (<code>ipsec.1</code>).</p>
   */
  Type: GatewayType | string | undefined;

  /**
   * <p>The tags to apply to the customer gateway.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateCustomerGatewayRequest {
  export const filterSensitiveLog = (obj: CreateCustomerGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a customer gateway.</p>
 */
export interface CustomerGateway {
  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The current state of the customer gateway (<code>pending | available | deleting |
   *             deleted</code>).</p>
   */
  State?: string;

  /**
   * <p>The name of customer gateway device.</p>
   */
  DeviceName?: string;

  /**
   * <p>The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).</p>
   */
  BgpAsn?: string;

  /**
   * <p>The type of VPN connection the customer gateway supports (<code>ipsec.1</code>).</p>
   */
  Type?: string;

  /**
   * <p>Any tags assigned to the customer gateway.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The Internet-routable IP address of the customer gateway's outside interface.</p>
   */
  IpAddress?: string;
}

export namespace CustomerGateway {
  export const filterSensitiveLog = (obj: CustomerGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayResult {
  /**
   * <p>Information about the customer gateway.</p>
   */
  CustomerGateway?: CustomerGateway;
}

export namespace CreateCustomerGatewayResult {
  export const filterSensitiveLog = (obj: CreateCustomerGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateDefaultSubnetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Availability Zone in which to create the default subnet.</p>
   */
  AvailabilityZone: string | undefined;
}

export namespace CreateDefaultSubnetRequest {
  export const filterSensitiveLog = (obj: CreateDefaultSubnetRequest): any => ({
    ...obj,
  });
}

export type SubnetState = "available" | "pending";

/**
 * <p>Describes a subnet.</p>
 */
export interface Subnet {
  /**
   * <p>The current state of the subnet.</p>
   */
  State?: SubnetState | string;

  /**
   * <p>The IPv4 CIDR block assigned to the subnet.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives an IPv6 address.</p>
   */
  AssignIpv6AddressOnCreation?: boolean;

  /**
   * <p>Any tags assigned to the subnet.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the subnet.</p>
   */
  Ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[];

  /**
   * <p>The ID of the AWS account that owns the subnet.</p>
   */
  OwnerId?: string;

  /**
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The AZ ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>Indicates whether this is the default subnet for the Availability Zone.</p>
   */
  DefaultForAz?: boolean;

  /**
   * <p>The Availability Zone of the subnet.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the subnet.</p>
   */
  SubnetArn?: string;

  /**
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives a customer-owned IPv4 address.</p>
   */
  MapCustomerOwnedIpOnLaunch?: boolean;

  /**
   * <p>The ID of the VPC the subnet is in.</p>
   */
  VpcId?: string;

  /**
   * <p>The number of unused private IPv4 addresses in the subnet. The IPv4 addresses for any
   * 			stopped instances are considered unavailable.</p>
   */
  AvailableIpAddressCount?: number;

  /**
   * <p>Indicates whether instances launched in this subnet receive a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: boolean;
}

export namespace Subnet {
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj,
  });
}

export interface CreateDefaultSubnetResult {
  /**
   * <p>Information about the subnet.</p>
   */
  Subnet?: Subnet;
}

export namespace CreateDefaultSubnetResult {
  export const filterSensitiveLog = (obj: CreateDefaultSubnetResult): any => ({
    ...obj,
  });
}

export interface CreateDefaultVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateDefaultVpcRequest {
  export const filterSensitiveLog = (obj: CreateDefaultVpcRequest): any => ({
    ...obj,
  });
}

export type Tenancy = "dedicated" | "default" | "host";

export type VpcState = "available" | "pending";

/**
 * <p>Describes a VPC.</p>
 */
export interface Vpc {
  /**
   * <p>The allowed tenancy of instances launched into the VPC.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the set of DHCP options you've associated with the VPC.</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the AWS account that owns the VPC.</p>
   */
  OwnerId?: string;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   */
  Ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[];

  /**
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   */
  CidrBlockAssociationSet?: VpcCidrBlockAssociation[];

  /**
   * <p>Indicates whether the VPC is the default VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The current state of the VPC.</p>
   */
  State?: VpcState | string;

  /**
   * <p>The primary IPv4 CIDR block for the VPC.</p>
   */
  CidrBlock?: string;
}

export namespace Vpc {
  export const filterSensitiveLog = (obj: Vpc): any => ({
    ...obj,
  });
}

export interface CreateDefaultVpcResult {
  /**
   * <p>Information about the VPC.</p>
   */
  Vpc?: Vpc;
}

export namespace CreateDefaultVpcResult {
  export const filterSensitiveLog = (obj: CreateDefaultVpcResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a DHCP configuration option.</p>
 */
export interface NewDhcpConfiguration {
  /**
   * <p>The name of a DHCP option.</p>
   */
  Key?: string;

  /**
   * <p>One or more values for the DHCP option.</p>
   */
  Values?: string[];
}

export namespace NewDhcpConfiguration {
  export const filterSensitiveLog = (obj: NewDhcpConfiguration): any => ({
    ...obj,
  });
}

export interface CreateDhcpOptionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to assign to the DHCP option.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A DHCP configuration option.</p>
   */
  DhcpConfigurations: NewDhcpConfiguration[] | undefined;
}

export namespace CreateDhcpOptionsRequest {
  export const filterSensitiveLog = (obj: CreateDhcpOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a value for a resource attribute that is a String.</p>
 */
export interface AttributeValue {
  /**
   * <p>The attribute value. The value is case-sensitive.</p>
   */
  Value?: string;
}

export namespace AttributeValue {
  export const filterSensitiveLog = (obj: AttributeValue): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a DHCP configuration option.</p>
 */
export interface DhcpConfiguration {
  /**
   * <p>The name of a DHCP option.</p>
   */
  Key?: string;

  /**
   * <p>One or more values for the DHCP option.</p>
   */
  Values?: AttributeValue[];
}

export namespace DhcpConfiguration {
  export const filterSensitiveLog = (obj: DhcpConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a set of DHCP options.</p>
 */
export interface DhcpOptions {
  /**
   * <p>Any tags assigned to the DHCP options set.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the set of DHCP options.</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>The ID of the AWS account that owns the DHCP options set.</p>
   */
  OwnerId?: string;

  /**
   * <p>One or more DHCP options in the set.</p>
   */
  DhcpConfigurations?: DhcpConfiguration[];
}

export namespace DhcpOptions {
  export const filterSensitiveLog = (obj: DhcpOptions): any => ({
    ...obj,
  });
}

export interface CreateDhcpOptionsResult {
  /**
   * <p>A set of DHCP options.</p>
   */
  DhcpOptions?: DhcpOptions;
}

export namespace CreateDhcpOptionsResult {
  export const filterSensitiveLog = (obj: CreateDhcpOptionsResult): any => ({
    ...obj,
  });
}

export interface CreateEgressOnlyInternetGatewayRequest {
  /**
   * <p>The tags to assign to the egress-only internet gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC for which to create the egress-only internet gateway.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   * 				Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateEgressOnlyInternetGatewayRequest {
  export const filterSensitiveLog = (obj: CreateEgressOnlyInternetGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the attachment of a VPC to an internet gateway or an egress-only internet
 * 			gateway.</p>
 */
export interface InternetGatewayAttachment {
  /**
   * <p>The current state of the attachment. For an internet gateway, the state is
   * 				<code>available</code> when attached to a VPC; otherwise, this value is not
   * 			returned.</p>
   */
  State?: AttachmentStatus | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace InternetGatewayAttachment {
  export const filterSensitiveLog = (obj: InternetGatewayAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an egress-only internet gateway.</p>
 */
export interface EgressOnlyInternetGateway {
  /**
   * <p>Information about the attachment of the egress-only internet gateway.</p>
   */
  Attachments?: InternetGatewayAttachment[];

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The tags assigned to the egress-only internet gateway.</p>
   */
  Tags?: Tag[];
}

export namespace EgressOnlyInternetGateway {
  export const filterSensitiveLog = (obj: EgressOnlyInternetGateway): any => ({
    ...obj,
  });
}

export interface CreateEgressOnlyInternetGatewayResult {
  /**
   * <p>Information about the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGateway?: EgressOnlyInternetGateway;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request.</p>
   */
  ClientToken?: string;
}

export namespace CreateEgressOnlyInternetGatewayResult {
  export const filterSensitiveLog = (obj: CreateEgressOnlyInternetGatewayResult): any => ({
    ...obj,
  });
}

export enum FleetExcessCapacityTerminationPolicy {
  NO_TERMINATION = "no-termination",
  TERMINATION = "termination",
}

/**
 * <p>Describes the Amazon EC2 launch template and the launch template version that can be used by
 *          an EC2 Fleet to configure Amazon EC2 instances. For information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching
 *             an instance from a launch template</a> in the
 *          <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface FleetLaunchTemplateSpecificationRequest {
  /**
   * <p>The name of the launch template. If you specify the template name, you can't specify the template ID.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>. You must specify a value, otherwise the request fails.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch template.</p>
   */
  Version?: string;

  /**
   * <p>The ID of the launch template. If you specify the template ID, you can't specify the template name.</p>
   */
  LaunchTemplateId?: string;
}

export namespace FleetLaunchTemplateSpecificationRequest {
  export const filterSensitiveLog = (obj: FleetLaunchTemplateSpecificationRequest): any => ({
    ...obj,
  });
}

export type _InstanceType =
  | "a1.2xlarge"
  | "a1.4xlarge"
  | "a1.large"
  | "a1.medium"
  | "a1.metal"
  | "a1.xlarge"
  | "c1.medium"
  | "c1.xlarge"
  | "c3.2xlarge"
  | "c3.4xlarge"
  | "c3.8xlarge"
  | "c3.large"
  | "c3.xlarge"
  | "c4.2xlarge"
  | "c4.4xlarge"
  | "c4.8xlarge"
  | "c4.large"
  | "c4.xlarge"
  | "c5.12xlarge"
  | "c5.18xlarge"
  | "c5.24xlarge"
  | "c5.2xlarge"
  | "c5.4xlarge"
  | "c5.9xlarge"
  | "c5.large"
  | "c5.metal"
  | "c5.xlarge"
  | "c5a.12xlarge"
  | "c5a.16xlarge"
  | "c5a.24xlarge"
  | "c5a.2xlarge"
  | "c5a.4xlarge"
  | "c5a.8xlarge"
  | "c5a.large"
  | "c5a.xlarge"
  | "c5ad.12xlarge"
  | "c5ad.16xlarge"
  | "c5ad.24xlarge"
  | "c5ad.2xlarge"
  | "c5ad.4xlarge"
  | "c5ad.8xlarge"
  | "c5ad.large"
  | "c5ad.xlarge"
  | "c5d.12xlarge"
  | "c5d.18xlarge"
  | "c5d.24xlarge"
  | "c5d.2xlarge"
  | "c5d.4xlarge"
  | "c5d.9xlarge"
  | "c5d.large"
  | "c5d.metal"
  | "c5d.xlarge"
  | "c5n.18xlarge"
  | "c5n.2xlarge"
  | "c5n.4xlarge"
  | "c5n.9xlarge"
  | "c5n.large"
  | "c5n.xlarge"
  | "c6g.12xlarge"
  | "c6g.16xlarge"
  | "c6g.2xlarge"
  | "c6g.4xlarge"
  | "c6g.8xlarge"
  | "c6g.large"
  | "c6g.medium"
  | "c6g.metal"
  | "c6g.xlarge"
  | "c6gd.12xlarge"
  | "c6gd.16xlarge"
  | "c6gd.2xlarge"
  | "c6gd.4xlarge"
  | "c6gd.8xlarge"
  | "c6gd.large"
  | "c6gd.medium"
  | "c6gd.metal"
  | "c6gd.xlarge"
  | "cc1.4xlarge"
  | "cc2.8xlarge"
  | "cg1.4xlarge"
  | "cr1.8xlarge"
  | "d2.2xlarge"
  | "d2.4xlarge"
  | "d2.8xlarge"
  | "d2.xlarge"
  | "f1.16xlarge"
  | "f1.2xlarge"
  | "f1.4xlarge"
  | "g2.2xlarge"
  | "g2.8xlarge"
  | "g3.16xlarge"
  | "g3.4xlarge"
  | "g3.8xlarge"
  | "g3s.xlarge"
  | "g4dn.12xlarge"
  | "g4dn.16xlarge"
  | "g4dn.2xlarge"
  | "g4dn.4xlarge"
  | "g4dn.8xlarge"
  | "g4dn.metal"
  | "g4dn.xlarge"
  | "h1.16xlarge"
  | "h1.2xlarge"
  | "h1.4xlarge"
  | "h1.8xlarge"
  | "hi1.4xlarge"
  | "hs1.8xlarge"
  | "i2.2xlarge"
  | "i2.4xlarge"
  | "i2.8xlarge"
  | "i2.xlarge"
  | "i3.16xlarge"
  | "i3.2xlarge"
  | "i3.4xlarge"
  | "i3.8xlarge"
  | "i3.large"
  | "i3.metal"
  | "i3.xlarge"
  | "i3en.12xlarge"
  | "i3en.24xlarge"
  | "i3en.2xlarge"
  | "i3en.3xlarge"
  | "i3en.6xlarge"
  | "i3en.large"
  | "i3en.metal"
  | "i3en.xlarge"
  | "inf1.24xlarge"
  | "inf1.2xlarge"
  | "inf1.6xlarge"
  | "inf1.xlarge"
  | "m1.large"
  | "m1.medium"
  | "m1.small"
  | "m1.xlarge"
  | "m2.2xlarge"
  | "m2.4xlarge"
  | "m2.xlarge"
  | "m3.2xlarge"
  | "m3.large"
  | "m3.medium"
  | "m3.xlarge"
  | "m4.10xlarge"
  | "m4.16xlarge"
  | "m4.2xlarge"
  | "m4.4xlarge"
  | "m4.large"
  | "m4.xlarge"
  | "m5.12xlarge"
  | "m5.16xlarge"
  | "m5.24xlarge"
  | "m5.2xlarge"
  | "m5.4xlarge"
  | "m5.8xlarge"
  | "m5.large"
  | "m5.metal"
  | "m5.xlarge"
  | "m5a.12xlarge"
  | "m5a.16xlarge"
  | "m5a.24xlarge"
  | "m5a.2xlarge"
  | "m5a.4xlarge"
  | "m5a.8xlarge"
  | "m5a.large"
  | "m5a.xlarge"
  | "m5ad.12xlarge"
  | "m5ad.16xlarge"
  | "m5ad.24xlarge"
  | "m5ad.2xlarge"
  | "m5ad.4xlarge"
  | "m5ad.8xlarge"
  | "m5ad.large"
  | "m5ad.xlarge"
  | "m5d.12xlarge"
  | "m5d.16xlarge"
  | "m5d.24xlarge"
  | "m5d.2xlarge"
  | "m5d.4xlarge"
  | "m5d.8xlarge"
  | "m5d.large"
  | "m5d.metal"
  | "m5d.xlarge"
  | "m5dn.12xlarge"
  | "m5dn.16xlarge"
  | "m5dn.24xlarge"
  | "m5dn.2xlarge"
  | "m5dn.4xlarge"
  | "m5dn.8xlarge"
  | "m5dn.large"
  | "m5dn.xlarge"
  | "m5n.12xlarge"
  | "m5n.16xlarge"
  | "m5n.24xlarge"
  | "m5n.2xlarge"
  | "m5n.4xlarge"
  | "m5n.8xlarge"
  | "m5n.large"
  | "m5n.xlarge"
  | "m6g.12xlarge"
  | "m6g.16xlarge"
  | "m6g.2xlarge"
  | "m6g.4xlarge"
  | "m6g.8xlarge"
  | "m6g.large"
  | "m6g.medium"
  | "m6g.metal"
  | "m6g.xlarge"
  | "m6gd.12xlarge"
  | "m6gd.16xlarge"
  | "m6gd.2xlarge"
  | "m6gd.4xlarge"
  | "m6gd.8xlarge"
  | "m6gd.large"
  | "m6gd.medium"
  | "m6gd.metal"
  | "m6gd.xlarge"
  | "p2.16xlarge"
  | "p2.8xlarge"
  | "p2.xlarge"
  | "p3.16xlarge"
  | "p3.2xlarge"
  | "p3.8xlarge"
  | "p3dn.24xlarge"
  | "r3.2xlarge"
  | "r3.4xlarge"
  | "r3.8xlarge"
  | "r3.large"
  | "r3.xlarge"
  | "r4.16xlarge"
  | "r4.2xlarge"
  | "r4.4xlarge"
  | "r4.8xlarge"
  | "r4.large"
  | "r4.xlarge"
  | "r5.12xlarge"
  | "r5.16xlarge"
  | "r5.24xlarge"
  | "r5.2xlarge"
  | "r5.4xlarge"
  | "r5.8xlarge"
  | "r5.large"
  | "r5.metal"
  | "r5.xlarge"
  | "r5a.12xlarge"
  | "r5a.16xlarge"
  | "r5a.24xlarge"
  | "r5a.2xlarge"
  | "r5a.4xlarge"
  | "r5a.8xlarge"
  | "r5a.large"
  | "r5a.xlarge"
  | "r5ad.12xlarge"
  | "r5ad.16xlarge"
  | "r5ad.24xlarge"
  | "r5ad.2xlarge"
  | "r5ad.4xlarge"
  | "r5ad.8xlarge"
  | "r5ad.large"
  | "r5ad.xlarge"
  | "r5d.12xlarge"
  | "r5d.16xlarge"
  | "r5d.24xlarge"
  | "r5d.2xlarge"
  | "r5d.4xlarge"
  | "r5d.8xlarge"
  | "r5d.large"
  | "r5d.metal"
  | "r5d.xlarge"
  | "r5dn.12xlarge"
  | "r5dn.16xlarge"
  | "r5dn.24xlarge"
  | "r5dn.2xlarge"
  | "r5dn.4xlarge"
  | "r5dn.8xlarge"
  | "r5dn.large"
  | "r5dn.xlarge"
  | "r5n.12xlarge"
  | "r5n.16xlarge"
  | "r5n.24xlarge"
  | "r5n.2xlarge"
  | "r5n.4xlarge"
  | "r5n.8xlarge"
  | "r5n.large"
  | "r5n.xlarge"
  | "r6g.12xlarge"
  | "r6g.16xlarge"
  | "r6g.2xlarge"
  | "r6g.4xlarge"
  | "r6g.8xlarge"
  | "r6g.large"
  | "r6g.medium"
  | "r6g.metal"
  | "r6g.xlarge"
  | "r6gd.12xlarge"
  | "r6gd.16xlarge"
  | "r6gd.2xlarge"
  | "r6gd.4xlarge"
  | "r6gd.8xlarge"
  | "r6gd.large"
  | "r6gd.medium"
  | "r6gd.metal"
  | "r6gd.xlarge"
  | "t1.micro"
  | "t2.2xlarge"
  | "t2.large"
  | "t2.medium"
  | "t2.micro"
  | "t2.nano"
  | "t2.small"
  | "t2.xlarge"
  | "t3.2xlarge"
  | "t3.large"
  | "t3.medium"
  | "t3.micro"
  | "t3.nano"
  | "t3.small"
  | "t3.xlarge"
  | "t3a.2xlarge"
  | "t3a.large"
  | "t3a.medium"
  | "t3a.micro"
  | "t3a.nano"
  | "t3a.small"
  | "t3a.xlarge"
  | "t4g.2xlarge"
  | "t4g.large"
  | "t4g.medium"
  | "t4g.micro"
  | "t4g.nano"
  | "t4g.small"
  | "t4g.xlarge"
  | "u-12tb1.metal"
  | "u-18tb1.metal"
  | "u-24tb1.metal"
  | "u-6tb1.metal"
  | "u-9tb1.metal"
  | "x1.16xlarge"
  | "x1.32xlarge"
  | "x1e.16xlarge"
  | "x1e.2xlarge"
  | "x1e.32xlarge"
  | "x1e.4xlarge"
  | "x1e.8xlarge"
  | "x1e.xlarge"
  | "z1d.12xlarge"
  | "z1d.2xlarge"
  | "z1d.3xlarge"
  | "z1d.6xlarge"
  | "z1d.large"
  | "z1d.metal"
  | "z1d.xlarge";

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface Placement {
  /**
   * <p>The name of the placement group the instance is in.</p>
   */
  GroupName?: string;

  /**
   * <p>The number of the partition the instance is in. Valid only if the placement group
   *             strategy is set to <code>partition</code>.</p>
   *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. If you specify
   *     		a host resource group ARN, omit the <b>Tenancy</b>
   *     		parameter or set it to <code>host</code>.</p>
   *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host. This parameter is not
   *             supported for the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> command.</p>
   *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  Affinity?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code>
   *             tenancy is not supported for the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> command.</p>
   *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The Availability Zone of the instance.</p>
   *         <p>If not specified, an Availability Zone will be automatically chosen for you based on
   *             the load balancing criteria for the Region.</p>
   *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Dedicated Host on which the instance resides. This parameter is not
   *             supported for the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> command.</p>
   *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  HostId?: string;

  /**
   * <p>Reserved for future use.</p>
   *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  SpreadDomain?: string;
}

export namespace Placement {
  export const filterSensitiveLog = (obj: Placement): any => ({
    ...obj,
  });
}

/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverridesRequest {
  /**
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: Placement;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The priority for the launch template override. If <b>AllocationStrategy</b> is set to <code>prioritized</code>, EC2 Fleet uses priority to
   *          determine which launch template override to use first in fulfilling On-Demand capacity. The
   *          highest priority is launched first. Valid values are whole numbers starting at
   *             <code>0</code>. The lower the number, the higher the priority. If no number is set, the
   *          launch template override has the lowest priority.</p>
   */
  Priority?: number;

  /**
   * <p>The IDs of the subnets in which to launch the instances. Separate multiple subnet IDs using commas (for example, <code>subnet-1234abcdeexample1, subnet-0987cdef6example2</code>). A request of type <code>instant</code> can have only one subnet ID.</p>
   */
  SubnetId?: string;
}

export namespace FleetLaunchTemplateOverridesRequest {
  export const filterSensitiveLog = (obj: FleetLaunchTemplateOverridesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface FleetLaunchTemplateConfigRequest {
  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverridesRequest[];

  /**
   * <p>The launch template to use. You must specify either the launch template ID or launch
   *          template name in the request. </p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
}

export namespace FleetLaunchTemplateConfigRequest {
  export const filterSensitiveLog = (obj: FleetLaunchTemplateConfigRequest): any => ({
    ...obj,
  });
}

export enum FleetOnDemandAllocationStrategy {
  LOWEST_PRICE = "lowest-price",
  PRIORITIZED = "prioritized",
}

export enum FleetCapacityReservationUsageStrategy {
  USE_CAPACITY_RESERVATIONS_FIRST = "use-capacity-reservations-first",
}

/**
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet Example
 *             Configurations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface CapacityReservationOptionsRequest {
  /**
   * <p>Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.</p>
   *          <p>If you specify <code>use-capacity-reservations-first</code>, the fleet uses unused
   *          Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If
   *          multiple instance pools have unused Capacity Reservations, the On-Demand allocation
   *          strategy (<code>lowest-price</code> or <code>prioritized</code>) is applied. If the number
   *          of unused Capacity Reservations is less than the On-Demand target capacity, the remaining
   *          On-Demand target capacity is launched according to the On-Demand allocation strategy
   *             (<code>lowest-price</code> or <code>prioritized</code>).</p>
   *          <p>If you do not specify a value, the fleet fulfils the On-Demand capacity according to the
   *          chosen On-Demand allocation strategy.</p>
   */
  UsageStrategy?: FleetCapacityReservationUsageStrategy | string;
}

export namespace CapacityReservationOptionsRequest {
  export const filterSensitiveLog = (obj: CapacityReservationOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface OnDemandOptionsRequest {
  /**
   * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the fleet.
   *          Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone. Supported
   *          only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
   *          Supported only for fleets of type <code>instant</code>.</p>
   */
  CapacityReservationOptions?: CapacityReservationOptionsRequest;

  /**
   * <p>The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;

  /**
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity. If
   *          you specify <code>lowest-price</code>, EC2 Fleet uses price to determine the order, launching
   *          the lowest price first. If you specify <code>prioritized</code>, EC2 Fleet uses the priority
   *          that you assigned to each launch template override, launching the highest priority first.
   *          If you do not specify a value, EC2 Fleet defaults to <code>lowest-price</code>.</p>
   */
  AllocationStrategy?: FleetOnDemandAllocationStrategy | string;
}

export namespace OnDemandOptionsRequest {
  export const filterSensitiveLog = (obj: OnDemandOptionsRequest): any => ({
    ...obj,
  });
}

export enum SpotAllocationStrategy {
  CAPACITY_OPTIMIZED = "capacity-optimized",
  DIVERSIFIED = "diversified",
  LOWEST_PRICE = "lowest-price",
}

export type SpotInstanceInterruptionBehavior = "hibernate" | "stop" | "terminate";

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet request.</p>
 */
export interface SpotOptionsRequest {
  /**
   * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the fleet.
   *          Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone. Supported
   *          only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | string;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid only
   *          when Spot <b>AllocationStrategy</b> is set to
   *             <code>lowest-price</code>. EC2 Fleet selects the cheapest Spot pools and evenly allocates
   *          your target Spot capacity across the number of Spot pools that you specify.</p>
   */
  InstancePoolsToUseCount?: number;

  /**
   * <p>The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>Indicates how to allocate the target Spot Instance capacity across the Spot Instance pools specified by
   *          the EC2 Fleet.</p>
   *          <p>If the allocation strategy is <code>lowest-price</code>, EC2 Fleet launches instances from
   *          the Spot Instance pools with the lowest price. This is the default allocation strategy.</p>
   *          <p>If the allocation strategy is <code>diversified</code>, EC2 Fleet launches instances from all
   *          of the Spot Instance pools that you specify.</p>
   *          <p>If the allocation strategy is <code>capacity-optimized</code>, EC2 Fleet launches instances
   *          from Spot Instance pools with optimal capacity for the number of instances that are
   *          launching.</p>
   */
  AllocationStrategy?: SpotAllocationStrategy | string;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;
}

export namespace SpotOptionsRequest {
  export const filterSensitiveLog = (obj: SpotOptionsRequest): any => ({
    ...obj,
  });
}

export enum DefaultTargetCapacityType {
  ON_DEMAND = "on-demand",
  SPOT = "spot",
}

/**
 * <p>The number of units to request. You can choose to set the target capacity as the number of
 *          instances. Or you can set the target capacity to a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code> parameter, or both parameters to ensure that your fleet cost
 *          does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances
 *          in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're
 *          willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops
 *          launching instances even if it hasn’t met the target capacity. The
 *          <code>MaxTotalPrice</code> parameters are located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptionsRequest">OnDemandOptionsRequest</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptionsRequest">SpotOptionsRequest</a>.</p>
 */
export interface TargetCapacitySpecificationRequest {
  /**
   * <p>The number of units to request, filled using
   *          <code>DefaultTargetCapacityType</code>.</p>
   */
  TotalTargetCapacity: number | undefined;

  /**
   * <p>The number of Spot units to request.</p>
   */
  SpotTargetCapacity?: number;

  /**
   * <p>The number of On-Demand units to request.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or
   *             <code>On-Demand</code>.</p>
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | string;
}

export namespace TargetCapacitySpecificationRequest {
  export const filterSensitiveLog = (obj: TargetCapacitySpecificationRequest): any => ({
    ...obj,
  });
}

export enum FleetType {
  INSTANT = "instant",
  MAINTAIN = "maintain",
  REQUEST = "request",
}

export interface CreateFleetRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The key-value pair for tagging the EC2 Fleet request on creation. The value for
   *             <code>ResourceType</code> must be <code>fleet</code>, otherwise the fleet request fails.
   *          To tag instances at launch, specify the tags in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch
   *             template</a>. For information about tagging after launch, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tagging Your
   *             Resources</a>. </p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy instances.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: OnDemandOptionsRequest;

  /**
   * <p>The number of units to request.</p>
   */
  TargetCapacitySpecification: TargetCapacitySpecificationRequest | undefined;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The configuration for the EC2 Fleet.</p>
   */
  LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: SpotOptionsRequest;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * <p>The type of the request. By default, the EC2 Fleet places an asynchronous request for your
   *          desired capacity, and maintains it by replenishing interrupted Spot Instances
   *          (<code>maintain</code>). A value of <code>instant</code> places a synchronous one-time
   *          request, and returns errors for any instances that could not be launched. A value of
   *             <code>request</code> places an asynchronous one-time request without maintaining
   *          capacity or submitting requests in alternative capacity pools if capacity is unavailable.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#ec2-fleet-request-type">EC2 Fleet
   *             Request Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Type?: FleetType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately.</p>
   */
  ValidFrom?: Date;
}

export namespace CreateFleetRequest {
  export const filterSensitiveLog = (obj: CreateFleetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon EC2 launch template and the launch template version that can be used by
 *             a Spot Fleet request to configure Amazon EC2 instances. For information about launch templates, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching an instance from a launch template</a> in the
 *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export interface FleetLaunchTemplateSpecification {
  /**
   * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>. You must specify a value, otherwise the request fails.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch template.</p>
   */
  Version?: string;

  /**
   * <p>The name of the launch template. If you specify the template name, you can't specify the template ID.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The ID of the launch template. If you specify the template ID, you can't specify the template name.</p>
   */
  LaunchTemplateId?: string;
}

export namespace FleetLaunchTemplateSpecification {
  export const filterSensitiveLog = (obj: FleetLaunchTemplateSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface PlacementResponse {
  /**
   * <p>The name of the placement group that the instance is in.</p>
   */
  GroupName?: string;
}

export namespace PlacementResponse {
  export const filterSensitiveLog = (obj: PlacementResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverrides {
  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: PlacementResponse;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The priority for the launch template override. If <b>AllocationStrategy</b> is set to <code>prioritized</code>, EC2 Fleet uses priority to
   *          determine which launch template override to use first in fulfilling On-Demand capacity. The
   *          highest priority is launched first. Valid values are whole numbers starting at
   *             <code>0</code>. The lower the number, the higher the priority. If no number is set, the
   *          override has the lowest priority.</p>
   */
  Priority?: number;
}

export namespace FleetLaunchTemplateOverrides {
  export const filterSensitiveLog = (obj: FleetLaunchTemplateOverrides): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateAndOverridesResponse {
  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverrides;

  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;
}

export namespace LaunchTemplateAndOverridesResponse {
  export const filterSensitiveLog = (obj: LaunchTemplateAndOverridesResponse): any => ({
    ...obj,
  });
}

export enum InstanceLifecycle {
  ON_DEMAND = "on-demand",
  SPOT = "spot",
}

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface CreateFleetError {
  /**
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code that indicates why the instance could not be launched. For more
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorCode?: string;
}

export namespace CreateFleetError {
  export const filterSensitiveLog = (obj: CreateFleetError): any => ({
    ...obj,
  });
}

export type PlatformValues = "Windows";

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface CreateFleetInstance {
  /**
   * <p>The value is <code>Windows</code> for Windows instances. Otherwise, the value is
   *          blank.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;
}

export namespace CreateFleetInstance {
  export const filterSensitiveLog = (obj: CreateFleetInstance): any => ({
    ...obj,
  });
}

export interface CreateFleetResult {
  /**
   * <p>Information about the instances that were launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Instances?: CreateFleetInstance[];

  /**
   * <p>Information about the instances that could not be launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Errors?: CreateFleetError[];

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export namespace CreateFleetResult {
  export const filterSensitiveLog = (obj: CreateFleetResult): any => ({
    ...obj,
  });
}

export type LogDestinationType = "cloud-watch-logs" | "s3";

export type FlowLogsResourceType = "NetworkInterface" | "Subnet" | "VPC";

export type TrafficType = "ACCEPT" | "ALL" | "REJECT";

export interface CreateFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.</p>
   *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
   *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The type of resource for which to create the flow log. For example, if you specified a VPC ID for
   *             the <code>ResourceId</code> property, specify <code>VPC</code> for this property.</p>
   */
  ResourceType: FlowLogsResourceType | string | undefined;

  /**
   * <p>Specifies the destination to which the flow log data is to be published. Flow log data can be published
   *             to a CloudWatch Logs log group or an Amazon S3 bucket. The value specified for this parameter depends on the value specified
   *             for <code>LogDestinationType</code>.</p>
   *         <p>If <code>LogDestinationType</code> is not specified or <code>cloud-watch-logs</code>,
   *             specify the Amazon Resource Name (ARN) of the CloudWatch Logs log group. For example, to publish
   *             to a log group called <code>my-logs</code>, specify
   *             <code>arn:aws:logs:us-east-1:123456789012:log-group:my-logs</code>. Alternatively,
   *             use <code>LogGroupName</code> instead.</p>
   *         <p>If LogDestinationType is <code>s3</code>, specify the ARN of the Amazon S3 bucket. You can also specify a
   *             subfolder in the bucket. To specify a subfolder in the bucket, use the following  ARN format:
   *             <code>bucket_ARN/subfolder_name/</code>. For example, to specify a subfolder named <code>my-logs</code> in a
   *             bucket named <code>my-bucket</code>, use the following ARN: <code>arn:aws:s3:::my-bucket/my-logs/</code>. You
   *             cannot use <code>AWSLogs</code> as a subfolder name. This is a reserved term.</p>
   */
  LogDestination?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.</p>
   */
  TrafficType: TrafficType | string | undefined;

  /**
   * <p>Specifies the type of destination to which the flow log data is to be published. Flow log data can be
   *             published to CloudWatch Logs or Amazon S3. To publish flow log data to CloudWatch Logs, specify <code>cloud-watch-logs</code>. To
   *             publish flow log data to Amazon S3, specify <code>s3</code>.</p>
   *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
   *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   *         <p>Default: <code>cloud-watch-logs</code>
   *          </p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The fields to include in the flow log record, in the order in which they should
   *             appear. For a list of available fields, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow Log Records</a>. If you
   *             omit this parameter, the flow log is created using the default format. If you specify this parameter, you must specify at least one field.</p>
   *         <p>Specify the fields using the <code>${field-id}</code> format, separated by spaces. For
   *             the AWS CLI, use single quotation marks (' ') to surround the parameter value.</p>
   */
  LogFormat?: string;

  /**
   * <p>The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group
   *             in your account.</p>
   *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
   *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * <p>The tags to apply to the flow logs.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The ID of the subnet, network interface, or VPC for which you want to create a flow log.</p>
   *         <p>Constraints: Maximum of 1000 resources</p>
   */
  ResourceIds: string[] | undefined;

  /**
   * <p>The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).</p>
   *         <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds or less, regardless
   *             of the value that you specify.</p>
   *         <p>Default: 600</p>
   */
  MaxAggregationInterval?: number;
}

export namespace CreateFlowLogsRequest {
  export const filterSensitiveLog = (obj: CreateFlowLogsRequest): any => ({
    ...obj,
  });
}

export interface CreateFlowLogsResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The IDs of the flow logs.</p>
   */
  FlowLogIds?: string[];

  /**
   * <p>Information about the flow logs that could not be created successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace CreateFlowLogsResult {
  export const filterSensitiveLog = (obj: CreateFlowLogsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a storage location in Amazon S3.</p>
 */
export interface StorageLocation {
  /**
   * <p>The key.</p>
   */
  Key?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  Bucket?: string;
}

export namespace StorageLocation {
  export const filterSensitiveLog = (obj: StorageLocation): any => ({
    ...obj,
  });
}

export interface CreateFpgaImageRequest {
  /**
   * <p>The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.</p>
   */
  InputStorageLocation: StorageLocation | undefined;

  /**
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * <p>The tags to apply to the FPGA image during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the AFI.</p>
   */
  Name?: string;

  /**
   * <p>The location in Amazon S3 for the output logs.</p>
   */
  LogsStorageLocation?: StorageLocation;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateFpgaImageRequest {
  export const filterSensitiveLog = (obj: CreateFpgaImageRequest): any => ({
    ...obj,
  });
}

export interface CreateFpgaImageResult {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;
}

export namespace CreateFpgaImageResult {
  export const filterSensitiveLog = (obj: CreateFpgaImageResult): any => ({
    ...obj,
  });
}

export type VolumeType = "gp2" | "io1" | "io2" | "sc1" | "st1" | "standard";

/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface EbsBlockDevice {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume type. If you set the type to <code>io1</code> or <code>io2</code>, you must also specify
   *         	the <b>Iops</b> parameter. If you set the type to <code>gp2</code>,
   *         	<code>st1</code>, <code>sc1</code>, or <code>standard</code>, you must omit
   *         	the <b>Iops</b> parameter.</p>
   *         <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Indicates whether the encryption state of an EBS volume is changed while being
   *             restored from a backing snapshot.
   *             The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-parameters">Amazon EBS Encryption</a>
   *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>In no case can you remove encryption from an encrypted volume.</p>
   *         <p>Encrypted volumes can only be attached to instances that support Amazon EBS
   *             encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported instance types</a>.</p>
   *         <p>This parameter is not returned by .</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Identifier (key ID, key alias, ID ARN, or alias ARN) for a customer managed CMK under
   *             which the EBS volume is encrypted.</p>
   *         <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>,
   *             and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination">Preserving Amazon EBS volumes on instance termination</a> in the
   *             Amazon Elastic Compute Cloud User Guide.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. For
   *             <code>io1</code> and <code>io2</code> volumes, this represents the number of IOPS that are provisioned
   *             for the volume. For <code>gp2</code> volumes, this represents the baseline performance
   *             of the volume and the rate at which the volume accumulates I/O credits for bursting. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>Constraints: Range is 100-16,000 IOPS for <code>gp2</code> volumes and
   *             100 to 64,000 IOPS for <code>io1</code> and <code>io2</code> volumes in
   *             most Regions. Maximum <code>io1</code> and <code>io2</code> IOPS of 64,000 is guaranteed
   *             only on <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instances</a>. Other instance families guarantee performance up to
   *             32,000 IOPS. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume
   *                 Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>Condition: This parameter is required for requests to create <code>io1</code> and <code>io2</code> volumes;
   *             it is not used in requests to create <code>gp2</code>, <code>st1</code>,
   *                 <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The size of the volume, in GiB.</p>
   *         <p>Default: If you're creating the volume from a snapshot and don't specify a volume
   *             size, the default is the snapshot size.</p>
   *         <p>Constraints: 1-16384 for General Purpose SSD (<code>gp2</code>), 4-16384 for
   *             Provisioned IOPS SSD (<code>io1</code> and <code>io2</code>), 500-16384 for Throughput Optimized HDD
   *                 (<code>st1</code>), 500-16384 for Cold HDD (<code>sc1</code>), and 1-1024 for
   *             Magnetic (<code>standard</code>) volumes. If you specify a snapshot, the volume size
   *             must be equal to or larger than the snapshot size.</p>
   */
  VolumeSize?: number;
}

export namespace EbsBlockDevice {
  export const filterSensitiveLog = (obj: EbsBlockDevice): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface BlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsBlockDevice;

  /**
   * <p>Suppresses the specified device included in the block device mapping of the
   *             AMI.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *             starting from 0. An instance type with 2 available instance store volumes can specify
   *             mappings for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of
   *             available instance store volumes depends on the instance type. After you connect to the
   *             instance, you must mount the volume.</p>
   *         <p>NVMe instance store volumes are automatically enumerated and assigned a device name.
   *             Including them in your block device mapping has no effect.</p>
   *         <p>Constraints: For M3 instances, you must specify instance store volumes in the block
   *             device mapping for the instance. When you launch an M3 instance, we ignore any instance
   *             store volumes specified in the block device mapping for the AMI.</p>
   */
  VirtualName?: string;
}

export namespace BlockDeviceMapping {
  export const filterSensitiveLog = (obj: BlockDeviceMapping): any => ({
    ...obj,
  });
}

export interface CreateImageRequest {
  /**
   * <p>A description for the new image.</p>
   */
  Description?: string;

  /**
   * <p>A name for the new image.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The block device mappings. This parameter cannot be used to modify the encryption status of existing volumes or snapshots. To create an AMI with encrypted snapshots, use the <a>CopyImage</a> action.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>By default, Amazon EC2 attempts to shut down and reboot the instance before creating the image. If the 'No Reboot' option is set, Amazon EC2 doesn't shut down the instance before creating the image. When this option is used, file system integrity on the created image can't be guaranteed.</p>
   */
  NoReboot?: boolean;
}

export namespace CreateImageRequest {
  export const filterSensitiveLog = (obj: CreateImageRequest): any => ({
    ...obj,
  });
}

export interface CreateImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   */
  ImageId?: string;
}

export namespace CreateImageResult {
  export const filterSensitiveLog = (obj: CreateImageResult): any => ({
    ...obj,
  });
}

export type ContainerFormat = "ova";

export type DiskImageFormat = "RAW" | "VHD" | "VMDK";

/**
 * <p>Describes an instance export task.</p>
 */
export interface ExportToS3TaskSpecification {
  /**
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   */
  ContainerFormat?: ContainerFormat | string;

  /**
   * <p>The image is written to a single object in the Amazon S3 bucket at the S3 key s3prefix +
   *    exportTaskId + '.' + diskImageFormat.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and grant
   *    WRITE and READ_ACP permissions to the AWS account
   *    <code>vm-import-export@amazon.com</code>.</p>
   */
  S3Bucket?: string;
}

export namespace ExportToS3TaskSpecification {
  export const filterSensitiveLog = (obj: ExportToS3TaskSpecification): any => ({
    ...obj,
  });
}

export type ExportEnvironment = "citrix" | "microsoft" | "vmware";

export interface CreateInstanceExportTaskRequest {
  /**
   * <p>A description for the conversion task or the resource being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * <p>The format and location for an instance export task.</p>
   */
  ExportToS3Task?: ExportToS3TaskSpecification;

  /**
   * <p>The tags to apply to the instance export task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment?: ExportEnvironment | string;
}

export namespace CreateInstanceExportTaskRequest {
  export const filterSensitiveLog = (obj: CreateInstanceExportTaskRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the format and location for an instance export task.</p>
 */
export interface ExportToS3Task {
  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and grant
   *    WRITE and READ_ACP permissions to the AWS account
   *    <code>vm-import-export@amazon.com</code>.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   */
  ContainerFormat?: ContainerFormat | string;

  /**
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The encryption key for your S3 bucket.</p>
   */
  S3Key?: string;
}

export namespace ExportToS3Task {
  export const filterSensitiveLog = (obj: ExportToS3Task): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance to export.</p>
 */
export interface InstanceExportDetails {
  /**
   * <p>The ID of the resource being exported.</p>
   */
  InstanceId?: string;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment?: ExportEnvironment | string;
}

export namespace InstanceExportDetails {
  export const filterSensitiveLog = (obj: InstanceExportDetails): any => ({
    ...obj,
  });
}

export type ExportTaskState = "active" | "cancelled" | "cancelling" | "completed";

/**
 * <p>Describes an instance export task.</p>
 */
export interface ExportTask {
  /**
   * <p>Information about the instance to export.</p>
   */
  InstanceExportDetails?: InstanceExportDetails;

  /**
   * <p>The ID of the export task.</p>
   */
  ExportTaskId?: string;

  /**
   * <p>The status message related to the export task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about the export task.</p>
   */
  ExportToS3Task?: ExportToS3Task;

  /**
   * <p>A description of the resource being exported.</p>
   */
  Description?: string;

  /**
   * <p>The tags for the export task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The state of the export task.</p>
   */
  State?: ExportTaskState | string;
}

export namespace ExportTask {
  export const filterSensitiveLog = (obj: ExportTask): any => ({
    ...obj,
  });
}

export interface CreateInstanceExportTaskResult {
  /**
   * <p>Information about the instance export task.</p>
   */
  ExportTask?: ExportTask;
}

export namespace CreateInstanceExportTaskResult {
  export const filterSensitiveLog = (obj: CreateInstanceExportTaskResult): any => ({
    ...obj,
  });
}

export interface CreateInternetGatewayRequest {
  /**
   * <p>The tags to assign to the internet gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateInternetGatewayRequest {
  export const filterSensitiveLog = (obj: CreateInternetGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an internet gateway.</p>
 */
export interface InternetGateway {
  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId?: string;

  /**
   * <p>Any VPCs attached to the internet gateway.</p>
   */
  Attachments?: InternetGatewayAttachment[];

  /**
   * <p>The ID of the AWS account that owns the internet gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>Any tags assigned to the internet gateway.</p>
   */
  Tags?: Tag[];
}

export namespace InternetGateway {
  export const filterSensitiveLog = (obj: InternetGateway): any => ({
    ...obj,
  });
}

export interface CreateInternetGatewayResult {
  /**
   * <p>Information about the internet gateway.</p>
   */
  InternetGateway?: InternetGateway;
}

export namespace CreateInternetGatewayResult {
  export const filterSensitiveLog = (obj: CreateInternetGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateKeyPairRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the new key pair.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A unique name for the key pair.</p>
   * 	        <p>Constraints: Up to 255 ASCII characters</p>
   */
  KeyName: string | undefined;
}

export namespace CreateKeyPairRequest {
  export const filterSensitiveLog = (obj: CreateKeyPairRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPair {
  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>The SHA-1 digest of the DER encoded private key.</p>
   */
  KeyFingerprint?: string;

  /**
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An unencrypted PEM encoded RSA private key.</p>
   */
  KeyMaterial?: string;
}

export namespace KeyPair {
  export const filterSensitiveLog = (obj: KeyPair): any => ({
    ...obj,
    ...(obj.KeyMaterial && { KeyMaterial: SENSITIVE_STRING }),
  });
}

/**
 * <p>The parameters for a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDeviceRequest {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you are creating a volume from a snapshot, you can't specify an encryption value.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The ARN of the symmetric AWS Key Management Service (AWS KMS) CMK used for
   *             encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for an <code>io1</code> or <code>io2</code> volume, with a maximum
   *     		ratio of 50 IOPS/GiB for <code>io1</code>, and 500 IOPS/GiB for <code>io2</code>. Range is 100 to 64,000 IOPS for
   *     		volumes in most Regions. Maximum IOPS of 64,000 is guaranteed only on
   *     		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based instances</a>. Other instance families guarantee performance up to
   *     		32,000 IOPS. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a> in the
   *     		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *     	    <p>This parameter is valid only for Provisioned IOPS SSD (<code>io1</code> and <code>io2</code>) volumes.</p>
   */
  Iops?: number;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The size of the volume, in GiB.</p>
   *         <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.</p>
   */
  VolumeSize?: number;
}

export namespace LaunchTemplateEbsBlockDeviceRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateEbsBlockDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMappingRequest {
  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is launched.</p>
   */
  Ebs?: LaunchTemplateEbsBlockDeviceRequest;

  /**
   * <p>The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for ephemeral0 and ephemeral1. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.</p>
   */
  VirtualName?: string;

  /**
   * <p>The device name (for example, /dev/sdh or xvdh).</p>
   */
  DeviceName?: string;

  /**
   * <p>Suppresses the specified device included in the block device mapping of the AMI.</p>
   */
  NoDevice?: string;
}

export namespace LaunchTemplateBlockDeviceMappingRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateBlockDeviceMappingRequest): any => ({
    ...obj,
  });
}

export type CapacityReservationPreference = "none" | "open";

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTarget {
  /**
   * <p>The ID of the Capacity Reservation in which to run the instance.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ARN of the Capacity Reservation resource group in which to run the instance.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

export namespace CapacityReservationTarget {
  export const filterSensitiveLog = (obj: CapacityReservationTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only one option at a time. Use the
 * 			<code>CapacityReservationPreference</code> parameter to configure the instance to run in On-Demand capacity or
 * 			to run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
 * 			Use the <code>CapacityReservationTarget</code> parameter to explicitly target a specific Capacity Reservation or
 * 			a Capacity Reservation group.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTarget;

  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes
   * 				(instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance
   * 				runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;
}

export namespace LaunchTemplateCapacityReservationSpecificationRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateCapacityReservationSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance. Both the core count and threads per core
 * 			must be specified in the request.</p>
 */
export interface LaunchTemplateCpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core. To disable multithreading
   * 			for the instance, specify a value of 1. Otherwise, specify the default value of 2.</p>
   */
  ThreadsPerCore?: number;
}

export namespace LaunchTemplateCpuOptionsRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateCpuOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The credit option for CPU usage of a T2, T3, or T3a instance.</p>
 */
export interface CreditSpecificationRequest {
  /**
   * <p>The credit option for CPU usage of a T2, T3, or T3a instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits: string | undefined;
}

export namespace CreditSpecificationRequest {
  export const filterSensitiveLog = (obj: CreditSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A specification for an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuSpecification {
  /**
   * <p>The type of Elastic Graphics accelerator. For more information about the values to specify for
   *             <code>Type</code>, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html#elastic-graphics-basics">Elastic Graphics Basics</a>, specifically the Elastic Graphics accelerator column, in the <i>Amazon Elastic Compute Cloud User Guide for Windows
   *                 Instances</i>.</p>
   */
  Type: string | undefined;
}

export namespace ElasticGpuSpecification {
  export const filterSensitiveLog = (obj: ElasticGpuSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes an elastic inference accelerator.
 *         </p>
 */
export interface LaunchTemplateElasticInferenceAccelerator {
  /**
   * <p>
   *             The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
   *         </p>
   */
  Type: string | undefined;

  /**
   * <p>
   *     		The number of elastic inference accelerators to attach to the instance.
   *     	</p>
   *     	    <p>Default: 1</p>
   */
  Count?: number;
}

export namespace LaunchTemplateElasticInferenceAccelerator {
  export const filterSensitiveLog = (obj: LaunchTemplateElasticInferenceAccelerator): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is configured for hibernation. This parameter is valid only
 *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>.</p>
 */
export interface LaunchTemplateHibernationOptionsRequest {
  /**
   * <p>If you set this parameter to <code>true</code>, the instance is enabled for hibernation.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Configured?: boolean;
}

export namespace LaunchTemplateHibernationOptionsRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateHibernationOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;
}

export namespace LaunchTemplateIamInstanceProfileSpecificationRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateIamInstanceProfileSpecificationRequest): any => ({
    ...obj,
  });
}

export type ShutdownBehavior = "stop" | "terminate";

export type MarketType = "spot";

export type InstanceInterruptionBehavior = "hibernate" | "stop" | "terminate";

export type SpotInstanceType = "one-time" | "persistent";

/**
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptionsRequest {
  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The end date of the request.
   *             For a one-time request, the request remains active until all instances launch, the request is canceled, or this date is reached.
   *             If the request is persistent, it remains active until it is canceled or this date and time is reached.
   *             The default end date is 7 days from the current date.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;

  /**
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;
}

export namespace LaunchTemplateSpotMarketOptionsRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateSpotMarketOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptionsRequest;

  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;
}

export namespace LaunchTemplateInstanceMarketOptionsRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMarketOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LaunchTemplateLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export type LaunchTemplateInstanceMetadataEndpointState = "disabled" | "enabled";

export enum LaunchTemplateHttpTokensState {
  optional = "optional",
  required = "required",
}

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the
 *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.</p>
   *         <p>Default: 1</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials using a valid signed token, the version 2.0 role credentials are returned.</p>
   *             <p>If the state is <code>required</code>, you must send a signed token header with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns the version 2.0 credentials; the version 1.0 credentials are not available.</p>
   */
  HttpTokens?: LaunchTemplateHttpTokensState | string;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your instance metadata.
   * </p>
   *          </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | string;
}

export namespace LaunchTemplateInstanceMetadataOptionsRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMetadataOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoringRequest {
  /**
   * <p>Specify <code>true</code> to enable detailed monitoring. Otherwise, basic monitoring is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplatesMonitoringRequest {
  export const filterSensitiveLog = (obj: LaunchTemplatesMonitoringRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface InstanceIpv6AddressRequest {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace InstanceIpv6AddressRequest {
  export const filterSensitiveLog = (obj: InstanceIpv6AddressRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a secondary private IPv4 address for a network interface.</p>
 */
export interface PrivateIpAddressSpecification {
  /**
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>Indicates whether the private IPv4 address is the primary private IPv4 address. Only
   *             one IPv4 address can be designated as primary.</p>
   */
  Primary?: boolean;
}

export namespace PrivateIpAddressSpecification {
  export const filterSensitiveLog = (obj: PrivateIpAddressSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters for a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>Associates a public IPv4 address with eth0 for a new network interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>Associates a Carrier IP address with eth0 for a new network interface.</p>
   *         <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>AWS Wavelength Developer
   *                 Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>The type of network interface. To create an Elastic Fabric Adapter (EFA), specify
   * 			<code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter</a> in the
   * 			<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * 		       <p>If you are not creating an EFA, specify <code>interface</code> or omit this parameter.</p>
   * 		       <p>Valid values: <code>interface</code> | <code>efa</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: InstanceIpv6AddressRequest[];

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;
}

export namespace LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacementRequest {
  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy
   *         	of dedicated runs on single-tenant hardware.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for an instance on a Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. If you specify a host
   * 		resource group ARN, omit the <b>Tenancy</b> parameter
   * 		or set it to <code>host</code>.</p>
   */
  HostResourceGroupArn?: string;
}

export namespace LaunchTemplatePlacementRequest {
  export const filterSensitiveLog = (obj: LaunchTemplatePlacementRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The tags specification for the launch template.</p>
 */
export interface LaunchTemplateTagSpecificationRequest {
  /**
   * <p>The type of resource to tag. Currently, the resource types that support tagging on
   *             creation are <code>instance</code> and <code>volume</code>. To tag a resource after it
   *         	has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Tag[];
}

export namespace LaunchTemplateTagSpecificationRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateTagSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The information to include in the launch template.</p>
 */
export interface RequestLaunchTemplateData {
  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and
   *             volumes on launch. The specified tags are applied to all instances or volumes that are
   *             created during launch. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  TagSpecifications?: LaunchTemplateTagSpecificationRequest[];

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>[EC2-Classic, default VPC] One or more security group names. For a nondefault VPC,
   *             you must use security group IDs instead. You cannot specify both a security group ID and
   *             security name in the same request.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The Base64-encoded user data to make available to the instance. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Running Commands on Your Linux Instance
   *                 at Launch</a> (Linux) and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html#instancedata-add-user-data">Adding User Data</a> (Windows).</p>
   */
  UserData?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoringRequest;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *             any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[];

  /**
   * <p>
   *             The elastic inference accelerator for the instance.
   *         </p>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[];

  /**
   * <p>The ID of the kernel.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User Provided
   *                     Kernels</a> in the <i>Amazon Elastic Compute Cloud User
   *                     Guide</i>.</p>
   *         </important>
   */
  KernelId?: string;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the
   *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *     		the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch,
   *     		use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>.
   *     		Alternatively, if you set <code>InstanceInitiatedShutdownBehavior</code> to
   *     		<code>terminate</code>, you can terminate the instance by running the shutdown
   *     		command from the instance.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
   *                 prerequisites</a>. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate Your Instance</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptionsRequest;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfigurationRequest[];

  /**
   * <p>The Capacity Reservation targeting option. If you do not specify this parameter, the
   * 			instance's Capacity Reservation preference defaults to <code>open</code>, which enables it
   * 			to run in any open Capacity Reservation that has matching attributes (instance type,
   * 			platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User
   * 				Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptionsRequest;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the instance. Valid for T2, T3, or T3a instances
   *             only.</p>
   */
  CreditSpecification?: CreditSpecificationRequest;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *         <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *         </important>
   */
  KeyName?: string;

  /**
   * <p>The ID of the RAM disk.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User Provided
   *                     Kernels</a> in the <i>Amazon Elastic Compute Cloud User
   *                     Guide</i>.</p>
   *         </important>
   */
  RamDiskId?: string;

  /**
   * <p>The block device mapping.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMappingRequest[];

  /**
   * <p>An elastic GPU to associate with the instance.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecification[];

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: LaunchTemplatePlacementRequest;

  /**
   * <p>One or more security group IDs. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>. You cannot specify both a security group ID and
   *             security name in the same request.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from
   *             the instance (using the operating system command for system shutdown).</p>
   *         <p>Default: <code>stop</code>
   *         </p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;
}

export namespace RequestLaunchTemplateData {
  export const filterSensitiveLog = (obj: RequestLaunchTemplateData): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateRequest {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description for the first version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the launch template during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A name for the launch template.</p>
   */
  LaunchTemplateName: string | undefined;
}

export namespace CreateLaunchTemplateRequest {
  export const filterSensitiveLog = (obj: CreateLaunchTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template.</p>
 */
export interface LaunchTemplate {
  /**
   * <p>The time launch template was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The version number of the latest version of the launch template.</p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The principal that created the launch template. </p>
   */
  CreatedBy?: string;

  /**
   * <p>The tags for the launch template.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The version number of the default version of the launch template.</p>
   */
  DefaultVersionNumber?: number;

  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;
}

export namespace LaunchTemplate {
  export const filterSensitiveLog = (obj: LaunchTemplate): any => ({
    ...obj,
  });
}
