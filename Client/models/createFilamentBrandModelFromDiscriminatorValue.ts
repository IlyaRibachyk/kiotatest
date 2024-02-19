import {FilamentBrandModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilamentBrandModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : FilamentBrandModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FilamentBrandModel();
}
