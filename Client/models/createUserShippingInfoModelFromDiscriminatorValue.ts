import {UserShippingInfoModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserShippingInfoModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserShippingInfoModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserShippingInfoModel();
}
