import {UsersWithIdRequestBuilderDeleteQueryParameters} from './usersWithIdRequestBuilderDeleteQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class UsersWithIdRequestBuilderDeleteRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: UsersWithIdRequestBuilderDeleteQueryParameters | undefined;
}
