import {PartItemModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPartItemModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : PartItemModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PartItemModel();
}
