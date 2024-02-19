import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FilamentBoxModel implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The filamentId property */
    private _filamentId?: string | undefined;
    /** The lenght property */
    private _lenght?: number | undefined;
    /** The price property */
    private _price?: number | undefined;
    /** The weight property */
    private _weight?: number | undefined;
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
     * Instantiates a new FilamentBoxModel and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the filamentId property value. The filamentId property
     * @returns a string
     */
    public get filamentId() {
        return this._filamentId;
    };
    /**
     * Sets the filamentId property value. The filamentId property
     * @param value Value to set for the filamentId property.
     */
    public set filamentId(value: string | undefined) {
        this._filamentId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "filamentId": n => { this.filamentId = n.getStringValue(); },
            "lenght": n => { this.lenght = n.getNumberValue(); },
            "price": n => { this.price = n.getNumberValue(); },
            "weight": n => { this.weight = n.getNumberValue(); },
        };
    };
    /**
     * Gets the lenght property value. The lenght property
     * @returns a double
     */
    public get lenght() {
        return this._lenght;
    };
    /**
     * Sets the lenght property value. The lenght property
     * @param value Value to set for the lenght property.
     */
    public set lenght(value: number | undefined) {
        this._lenght = value;
    };
    /**
     * Gets the price property value. The price property
     * @returns a double
     */
    public get price() {
        return this._price;
    };
    /**
     * Sets the price property value. The price property
     * @param value Value to set for the price property.
     */
    public set price(value: number | undefined) {
        this._price = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("filamentId", this.filamentId);
        writer.writeNumberValue("lenght", this.lenght);
        writer.writeNumberValue("price", this.price);
        writer.writeNumberValue("weight", this.weight);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the weight property value. The weight property
     * @returns a double
     */
    public get weight() {
        return this._weight;
    };
    /**
     * Sets the weight property value. The weight property
     * @param value Value to set for the weight property.
     */
    public set weight(value: number | undefined) {
        this._weight = value;
    };
}
