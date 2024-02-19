import {FilamentType} from './filamentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FilamentModel implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The brandId property */
    private _brandId?: string | undefined;
    /** The filamentType property */
    private _filamentType?: FilamentType | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The title property */
    private _title?: string | undefined;
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
     * Gets the brandId property value. The brandId property
     * @returns a string
     */
    public get brandId() {
        return this._brandId;
    };
    /**
     * Sets the brandId property value. The brandId property
     * @param value Value to set for the brandId property.
     */
    public set brandId(value: string | undefined) {
        this._brandId = value;
    };
    /**
     * Instantiates a new FilamentModel and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the filamentType property value. The filamentType property
     * @returns a FilamentType
     */
    public get filamentType() {
        return this._filamentType;
    };
    /**
     * Sets the filamentType property value. The filamentType property
     * @param value Value to set for the filamentType property.
     */
    public set filamentType(value: FilamentType | undefined) {
        this._filamentType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "brandId": n => { this.brandId = n.getStringValue(); },
            "filamentType": n => { this.filamentType = n.getEnumValue<FilamentType>(FilamentType); },
            "id": n => { this.id = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
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
        writer.writeStringValue("brandId", this.brandId);
        writer.writeEnumValue<FilamentType>("filamentType", this.filamentType);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("title", this.title);
        writer.writeAdditionalData(this.additionalData);
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
}
