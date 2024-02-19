import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintRequirementModel implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The filamentType property */
    private _filamentType?: string | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The partID property */
    private _partID?: string | undefined;
    /** The requirementsUrl property */
    private _requirementsUrl?: string | undefined;
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
     * Instantiates a new PrintRequirementModel and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the filamentType property value. The filamentType property
     * @returns a string
     */
    public get filamentType() {
        return this._filamentType;
    };
    /**
     * Sets the filamentType property value. The filamentType property
     * @param value Value to set for the filamentType property.
     */
    public set filamentType(value: string | undefined) {
        this._filamentType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "filamentType": n => { this.filamentType = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "partID": n => { this.partID = n.getStringValue(); },
            "requirementsUrl": n => { this.requirementsUrl = n.getStringValue(); },
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
     * Gets the partID property value. The partID property
     * @returns a string
     */
    public get partID() {
        return this._partID;
    };
    /**
     * Sets the partID property value. The partID property
     * @param value Value to set for the partID property.
     */
    public set partID(value: string | undefined) {
        this._partID = value;
    };
    /**
     * Gets the requirementsUrl property value. The requirementsUrl property
     * @returns a string
     */
    public get requirementsUrl() {
        return this._requirementsUrl;
    };
    /**
     * Sets the requirementsUrl property value. The requirementsUrl property
     * @param value Value to set for the requirementsUrl property.
     */
    public set requirementsUrl(value: string | undefined) {
        this._requirementsUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("filamentType", this.filamentType);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("partID", this.partID);
        writer.writeStringValue("requirementsUrl", this.requirementsUrl);
        writer.writeAdditionalData(this.additionalData);
    };
}
