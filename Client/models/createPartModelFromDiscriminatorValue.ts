import {PartModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPartModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : PartModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PartModel();
}
