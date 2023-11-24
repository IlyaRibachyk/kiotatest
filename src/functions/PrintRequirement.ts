import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import PrintRequirementEntity from "../Entites/printRequirementEntity";
import { BaseFunction } from "./baseFunction";
import {PrintRequirementModel} from "../types/PrintRequirementModel";

export async function PrintRequirement(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new PrintRequirementEntity();
    const { body, status } = await BaseFunction<PrintRequirementModel>(entity, request);
    return { body, status };
};

app.http('PrintRequirement', {
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    authLevel: 'anonymous',
    handler: PrintRequirement
});
