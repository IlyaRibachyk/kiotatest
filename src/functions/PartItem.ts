import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import PartItemEntity from "../Entites/partItemEntity";
import { BaseFunction } from "./baseFunction";
import {PartItemModel} from "../types/PartItemModel";

export async function PartItem(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new PartItemEntity();
    const { body, status } = await BaseFunction<PartItemModel>(entity, request);
    return { body, status };
};

app.http('PartItem', {
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    authLevel: 'anonymous',
    handler: PartItem
});
