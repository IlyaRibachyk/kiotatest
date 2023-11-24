
import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import FilamentBrandEntity from "../Entites/filamentBrandEntity";
import { BaseFunction } from "./baseFunction";
import { DeliveryBoxPartsInfoModel } from "../types/DeliveryBoxPartsInfoModel";

export async function FilamentBrand(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new FilamentBrandEntity();
    const { body, status } = await BaseFunction<DeliveryBoxPartsInfoModel>(entity, request);
    return { body, status };
};

app.http('FilamentBrand', {
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    authLevel: 'anonymous',
    handler: FilamentBrand
});
