import {OrderModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrderModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrderModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrderModel();
}
