import {OrderModel_status} from './orderModel_status';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrderModel implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The dueDate property */
    private _dueDate?: Date | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The status property */
    private _status?: OrderModel_status | undefined;
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
     * Instantiates a new OrderModel and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dueDate property value. The dueDate property
     * @returns a Date
     */
    public get dueDate() {
        return this._dueDate;
    };
    /**
     * Sets the dueDate property value. The dueDate property
     * @param value Value to set for the dueDate property.
     */
    public set dueDate(value: Date | undefined) {
        this._dueDate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dueDate": n => { this.dueDate = n.getDateValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<OrderModel_status>(OrderModel_status); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("dueDate", this.dueDate);
        writer.writeStringValue("id", this.id);
        writer.writeEnumValue<OrderModel_status>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. The status property
     * @returns a OrderModel_status
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: OrderModel_status | undefined) {
        this._status = value;
    };
}
