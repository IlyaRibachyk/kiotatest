import {DeliveryBoxPartsInfoRequestBuilder} from './deliveryBoxPartsInfo/deliveryBoxPartsInfoRequestBuilder';
import {DeliveryBoxPartsInfoWithIdRequestBuilder} from './deliveryBoxPartsInfoWithId/deliveryBoxPartsInfoWithIdRequestBuilder';
import {FilamentRequestBuilder} from './filament/filamentRequestBuilder';
import {FilamentBoxRequestBuilder} from './filamentBox/filamentBoxRequestBuilder';
import {FilamentBoxWithIdRequestBuilder} from './filamentBoxWithId/filamentBoxWithIdRequestBuilder';
import {FilamentBrandRequestBuilder} from './filamentBrand/filamentBrandRequestBuilder';
import {FilamentBrandWithIdRequestBuilder} from './filamentBrandWithId/filamentBrandWithIdRequestBuilder';
import {FilamentWithIdRequestBuilder} from './filamentWithId/filamentWithIdRequestBuilder';
import {OrderRequestBuilder} from './order/orderRequestBuilder';
import {OrderPartRequestBuilder} from './orderPart/orderPartRequestBuilder';
import {OrderPartWithIdRequestBuilder} from './orderPartWithId/orderPartWithIdRequestBuilder';
import {OrderWithIdRequestBuilder} from './orderWithId/orderWithIdRequestBuilder';
import {PartRequestBuilder} from './part/partRequestBuilder';
import {PartItemRequestBuilder} from './partItem/partItemRequestBuilder';
import {PartItemWithIdRequestBuilder} from './partItemWithId/partItemWithIdRequestBuilder';
import {PartWithIdRequestBuilder} from './partWithId/partWithIdRequestBuilder';
import {PrintRequirementRequestBuilder} from './printRequirement/printRequirementRequestBuilder';
import {PrintRequirementWithIdRequestBuilder} from './printRequirementWithId/printRequirementWithIdRequestBuilder';
import {UsersRequestBuilder} from './users/usersRequestBuilder';
import {UserShippingInfoRequestBuilder} from './userShippingInfo/userShippingInfoRequestBuilder';
import {UserShippingInfoWithIdRequestBuilder} from './userShippingInfoWithId/userShippingInfoWithIdRequestBuilder';
import {UsersWithIdRequestBuilder} from './usersWithId/usersWithIdRequestBuilder';
import {enableBackingStoreForSerializationWriterFactory, getPathParameters, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {FormParseNodeFactory, FormSerializationWriterFactory} from '@microsoft/kiota-serialization-form';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';
import {TextParseNodeFactory, TextSerializationWriterFactory} from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export class CompanyServiceClient {
    /** The DeliveryBoxPartsInfo property */
    public get deliveryBoxPartsInfo(): DeliveryBoxPartsInfoRequestBuilder {
        return new DeliveryBoxPartsInfoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The filament property */
    public get filament(): FilamentRequestBuilder {
        return new FilamentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The FilamentBox property */
    public get filamentBox(): FilamentBoxRequestBuilder {
        return new FilamentBoxRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The FilamentBrand property */
    public get filamentBrand(): FilamentBrandRequestBuilder {
        return new FilamentBrandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The Order property */
    public get order(): OrderRequestBuilder {
        return new OrderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The OrderPart property */
    public get orderPart(): OrderPartRequestBuilder {
        return new OrderPartRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The Part property */
    public get part(): PartRequestBuilder {
        return new PartRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The PartItem property */
    public get partItem(): PartItemRequestBuilder {
        return new PartItemRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The PrintRequirement property */
    public get printRequirement(): PrintRequirementRequestBuilder {
        return new PrintRequirementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** The Users property */
    public get users(): UsersRequestBuilder {
        return new UsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The UserShippingInfo property */
    public get userShippingInfo(): UserShippingInfoRequestBuilder {
        return new UserShippingInfoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CompanyServiceClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = {};
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultSerializer(TextSerializationWriterFactory);
        registerDefaultSerializer(FormSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        registerDefaultDeserializer(TextParseNodeFactory);
        registerDefaultDeserializer(FormParseNodeFactory);
        if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
            requestAdapter.baseUrl = "https://graph.microsoft.com/User.Read";
        }
        this.pathParameters["baseurl"] = requestAdapter.baseUrl;
    };
    /**
     * Builds and executes requests for operations under /DeliveryBoxPartsInfo?id={id}
     * @returns a DeliveryBoxPartsInfoWithIdRequestBuilder
     */
    public deliveryBoxPartsInfoWithId() : DeliveryBoxPartsInfoWithIdRequestBuilder {
        return new DeliveryBoxPartsInfoWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /FilamentBox?id={id}
     * @returns a FilamentBoxWithIdRequestBuilder
     */
    public filamentBoxWithId() : FilamentBoxWithIdRequestBuilder {
        return new FilamentBoxWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /FilamentBrand?id={id}
     * @returns a FilamentBrandWithIdRequestBuilder
     */
    public filamentBrandWithId() : FilamentBrandWithIdRequestBuilder {
        return new FilamentBrandWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /filament?id={id}
     * @returns a filamentWithIdRequestBuilder
     */
    public filamentWithId() : FilamentWithIdRequestBuilder {
        return new FilamentWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /OrderPart?id={id}
     * @returns a OrderPartWithIdRequestBuilder
     */
    public orderPartWithId() : OrderPartWithIdRequestBuilder {
        return new OrderPartWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /Order?id={id}
     * @returns a OrderWithIdRequestBuilder
     */
    public orderWithId() : OrderWithIdRequestBuilder {
        return new OrderWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /PartItem?id={id}
     * @returns a PartItemWithIdRequestBuilder
     */
    public partItemWithId() : PartItemWithIdRequestBuilder {
        return new PartItemWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /Part?id={id}
     * @returns a PartWithIdRequestBuilder
     */
    public partWithId() : PartWithIdRequestBuilder {
        return new PartWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /PrintRequirement?id={id}
     * @returns a PrintRequirementWithIdRequestBuilder
     */
    public printRequirementWithId() : PrintRequirementWithIdRequestBuilder {
        return new PrintRequirementWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /UserShippingInfo?id={id}
     * @returns a UserShippingInfoWithIdRequestBuilder
     */
    public userShippingInfoWithId() : UserShippingInfoWithIdRequestBuilder {
        return new UserShippingInfoWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /Users?id={id}
     * @returns a UsersWithIdRequestBuilder
     */
    public usersWithId() : UsersWithIdRequestBuilder {
        return new UsersWithIdRequestBuilder(this.pathParameters, this.requestAdapter);
    };
}
