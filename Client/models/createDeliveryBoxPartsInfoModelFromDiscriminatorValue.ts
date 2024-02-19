import {DeliveryBoxPartsInfoModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeliveryBoxPartsInfoModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeliveryBoxPartsInfoModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeliveryBoxPartsInfoModel();
}
