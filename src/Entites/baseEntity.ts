import {  
    TableClient, 
    AzureNamedKeyCredential,
    TableUpdateEntityHeaders
} from "@azure/data-tables";
import * as dotenv from "dotenv";
import generateUUID from "../utils/generateUUID";
dotenv.config();

export default class BaseEntity<T> {
    account: string = process.env["ACCOUNT_NAME"];
    accountKey: string = process.env["ACCOUNT_KEY"];
    tableUrl: string = process.env["TABLES_URL"];
    client: TableClient;
    defaultPartitionKey: string;

    constructor(tableName: string) {
        this.defaultPartitionKey = tableName;
        const credential = new AzureNamedKeyCredential(this.account, this.accountKey);
        this.client = new TableClient(this.tableUrl, tableName, credential, {allowInsecureConnection: true});
        this.client.createTable();
    }

    async initEnvirement() {
        const tableName = this.defaultPartitionKey || "BigTable";
        const credential = new AzureNamedKeyCredential(this.account, this.accountKey);
        this.client = new TableClient(this.tableUrl, tableName, credential, {allowInsecureConnection: true});    
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