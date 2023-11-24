import {
    app,
    HttpRequest,
    HttpResponseInit,
    InvocationContext
} from "@azure/functions";
import FilamentEntity from "../Entites/filamentEntity";
import {FilamentModel} from "../types/FilamentModel";
import {BaseFunction} from "./baseFunction";

export async function Filament(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new FilamentEntity();
    const { body, status } = await BaseFunction<FilamentModel>(entity, request);
    return { body, status };
}

app.http('Filament', {
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    authLevel: 'anonymous',
    handler: Filament
});
