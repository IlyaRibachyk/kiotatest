import {UserModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserModel();
}
