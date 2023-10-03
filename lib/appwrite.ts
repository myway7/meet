import { Client,Account } from "appwrite";
export const client = new Client();

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('651c3f0c9a7b25ba92ac');

export const account = new Account(client);
export { ID } from 'appwrite';