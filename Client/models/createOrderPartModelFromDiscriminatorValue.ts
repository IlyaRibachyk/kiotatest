import {OrderPartModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrderPartModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrderPartModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrderPartModel();
}
