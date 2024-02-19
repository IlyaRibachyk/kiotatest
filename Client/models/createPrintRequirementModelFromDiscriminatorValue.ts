import {PrintRequirementModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintRequirementModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintRequirementModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintRequirementModel();
}
