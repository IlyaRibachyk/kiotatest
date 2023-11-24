import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import OrderPartEntity from "../Entites/orderPartEntity";
import { BaseFunction } from "./baseFunction";
import { OrderPartModel } from "../types/OrderPartModel";

export async function OrderPart(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new OrderPartEntity();
    const { body, status } = await BaseFunction<OrderPartModel>(entity, request);
    return { body, status };
};

app.http('OrderPart', {
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    authLevel: 'anonymous',
    handler: OrderPart
});
