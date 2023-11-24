import BaseModel from "./BaseModel";
import UserShippingInfo from "./UserShippingInfo";

export interface UserModel extends BaseModel {
    userShippingInfo: UserShippingInfo;
    name: string;
}