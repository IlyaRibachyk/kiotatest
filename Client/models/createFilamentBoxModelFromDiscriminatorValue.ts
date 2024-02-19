import {FilamentBoxModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilamentBoxModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : FilamentBoxModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FilamentBoxModel();
}
