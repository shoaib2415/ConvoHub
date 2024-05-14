import { Client, Databases, Account } from "appwrite";

export const PROJECT_ID = "663db0500037f70f6571";
export const DATABASE_ID = "663db194002e355ee0d3";
export const COLLECTION_ID_MESSAGES = "663db19f0011bbe18a93";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("663db0500037f70f6571");

export const databases = new Databases(client);
export const account = new Account(client);
export default client;
