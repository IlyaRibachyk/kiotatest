import {DeliveryBoxType} from './deliveryBoxType';
import {OrderPartBookingStatus} from './orderPartBookingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeliveryBoxPartsInfoModel implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The count property */
    private _count?: number | undefined;
    /** The deliveryBoxType property */
    private _deliveryBoxType?: DeliveryBoxType | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The orderPartBookingStatus property */
    private _orderPartBookingStatus?: OrderPartBookingStatus | undefined;
    /** The orderPartID property */
    private _orderPartID?: string | undefined;
    /** The shippingNumber property */
    private _shippingNumber?: string | undefined;
    /** The userID property */
    private _userID?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new DeliveryBoxPartsInfoModel and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the count property value. The count property
     * @returns a double
     */
    public get count() {
        return this._count;
    };
    /**
     * Sets the count property value. The count property
     * @param value Value to set for the count property.
     */
    public set count(value: number | undefined) {
        this._count = value;
    };
    /**
     * Gets the deliveryBoxType property value. The deliveryBoxType property
     * @returns a DeliveryBoxType
     */
    public get deliveryBoxType() {
        return this._deliveryBoxType;
    };
    /**
     * Sets the deliveryBoxType property value. The deliveryBoxType property
     * @param value Value to set for the deliveryBoxType property.
     */
    public set deliveryBoxType(value: DeliveryBoxType | undefined) {
        this._deliveryBoxType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "count": n => { this.count = n.getNumberValue(); },
            "deliveryBoxType": n => { this.deliveryBoxType = n.getEnumValue<DeliveryBoxType>(DeliveryBoxType); },
            "id": n => { this.id = n.getStringValue(); },
            "orderPartBookingStatus": n => { this.orderPartBookingStatus = n.getEnumValue<OrderPartBookingStatus>(OrderPartBookingStatus); },
            "orderPartID": n => { this.orderPartID = n.getStringValue(); },
            "shippingNumber": n => { this.shippingNumber = n.getStringValue(); },
            "userID": n => { this.userID = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the orderPartBookingStatus property value. The orderPartBookingStatus property
     * @returns a OrderPartBookingStatus
     */
    public get orderPartBookingStatus() {
        return this._orderPartBookingStatus;
    };
    /**
     * Sets the orderPartBookingStatus property value. The orderPartBookingStatus property
     * @param value Value to set for the orderPartBookingStatus property.
     */
    public set orderPartBookingStatus(value: OrderPartBookingStatus | undefined) {
        this._orderPartBookingStatus = value;
    };
    /**
     * Gets the orderPartID property value. The orderPartID property
     * @returns a string
     */
    public get orderPartID() {
        return this._orderPartID;
    };
    /**
     * Sets the orderPartID property value. The orderPartID property
     * @param value Value to set for the orderPartID property.
     */
    public set orderPartID(value: string | undefined) {
        this._orderPartID = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("count", this.count);
        writer.writeEnumValue<DeliveryBoxType>("deliveryBoxType", this.deliveryBoxType);
        writer.writeStringValue("id", this.id);
        writer.writeEnumValue<OrderPartBookingStatus>("orderPartBookingStatus", this.orderPartBookingStatus);
        writer.writeStringValue("orderPartID", this.orderPartID);
        writer.writeStringValue("shippingNumber", this.shippingNumber);
        writer.writeStringValue("userID", this.userID);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the shippingNumber property value. The shippingNumber property
     * @returns a string
     */
    public get shippingNumber() {
        return this._shippingNumber;
    };
    /**
     * Sets the shippingNumber property value. The shippingNumber property
     * @param value Value to set for the shippingNumber property.
     */
    public set shippingNumber(value: string | undefined) {
        this._shippingNumber = value;
    };
    /**
     * Gets the userID property value. The userID property
     * @returns a string
     */
    public get userID() {
        return this._userID;
    };
    /**
     * Sets the userID property value. The userID property
     * @param value Value to set for the userID property.
     */
    public set userID(value: string | undefined) {
        this._userID = value;
    };
}
