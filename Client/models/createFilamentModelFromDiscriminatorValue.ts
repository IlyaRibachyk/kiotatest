import {FilamentModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilamentModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : FilamentModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FilamentModel();
}
