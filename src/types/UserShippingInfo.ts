import BaseModel from "./BaseModel";

export default interface userShippingInfo extends BaseModel {
    userID: string;
    apiKey: string;
    city: string;
    postOfficeID: string;
    lastName: string;
    firstName: string;
    phoneNumber: string;
}