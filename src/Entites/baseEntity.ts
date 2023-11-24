import { 
    TableServiceClient, 
    TableClient, 
    AzureNamedKeyCredential, 
    odata, 
    TableUpdateEntityHeaders
} from "@azure/data-tables";
import * as dotenv from "dotenv";
import { IBaseEntity } from "./IBaseEntity";
import generateUUID from "../utils/generateUUID";
dotenv.config();

export default class BaseEntity<T> {

    connectionString: string = process.env["CONNECTION_STRING"] || "";
    client: TableClient;
    defaultPartitionKey: string;

    constructor(tableName: string) {
        this.client = TableClient.fromConnectionString(
            this.connectionString, tableName, {allowInsecureConnection: true});
            this.defaultPartitionKey = tableName;
    }

    async initEnvirement() {
       await this.client.createTable();
    }

    async get(id: string): Promise<T> {
        return this.client.getEntity(this.defaultPartitionKey, id) as Promise<T>;
    }

    async filterBy(options: any): Promise<T[]> {
        const entities = await this.client.listEntities(options);
        const items: T[] = [];
        for await (const entity of entities) {
            items.push(entity as unknown as T);
        }
        return Promise.resolve(items);
    }

    async getAll(): Promise<T[]> {
        const entities = await this.client.listEntities();
        const items: T[] = [];
        for await (const entity of entities) {
            items.push(entity as unknown as T);
        }
        return Promise.resolve(items);
    }

    async update(entity: T): Promise<TableUpdateEntityHeaders> {
        return await this.client.updateEntity({
            partitionKey: this.defaultPartitionKey,
            rowKey: entity['id'],
            ...entity
     });
    }

   async delete(id: string): Promise<void> {
        await this.client.deleteEntity(this.defaultPartitionKey, id);
    }

    async createTable() {
        await this.client.createTable();
    }

    async insert(filament: T) {
        this.client.createEntity({
            partitionKey: this.defaultPartitionKey,
            rowKey: filament['id'] || generateUUID(),
            ...filament
        });
    }
}