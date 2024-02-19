import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PartModel implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The id property */
    private _id?: string | undefined;
    /** The itemID property */
    private _itemID?: string | undefined;
    /** The stlUrl property */
    private _stlUrl?: string | undefined;
    /** The title property */
    private _title?: string | undefined;
    /** The weight property */
    private _weight?: string | undefined;
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
     * Instantiates a new PartModel and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "itemID": n => { this.itemID = n.getStringValue(); },
            "stlUrl": n => { this.stlUrl = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "weight": n => { this.weight = n.getStringValue(); },
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
     * Gets the itemID property value. The itemID property
     * @returns a string
     */
    public get itemID() {
        return this._itemID;
    };
    /**
     * Sets the itemID property value. The itemID property
     * @param value Value to set for the itemID property.
     */
    public set itemID(value: string | undefined) {
        this._itemID = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("itemID", this.itemID);
        writer.writeStringValue("stlUrl", this.stlUrl);
        writer.writeStringValue("title", this.title);
        writer.writeStringValue("weight", this.weight);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the stlUrl property value. The stlUrl property
     * @returns a string
     */
    public get stlUrl() {
        return this._stlUrl;
    };
    /**
     * Sets the stlUrl property value. The stlUrl property
     * @param value Value to set for the stlUrl property.
     */
    public set stlUrl(value: string | undefined) {
        this._stlUrl = value;
    };
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the weight property value. The weight property
     * @returns a string
     */
    public get weight() {
        return this._weight;
    };
    /**
     * Sets the weight property value. The weight property
     * @param value Value to set for the weight property.
     */
    public set weight(value: string | undefined) {
        this._weight = value;
    };
}
