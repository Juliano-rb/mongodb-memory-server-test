import { MongoMemoryServer } from "mongodb-memory-server";

const PORT = 27017;

// This will create an new instance of "MongoMemoryServer" and automatically start it
const mongod = await MongoMemoryServer.create({ instance: { port: PORT } });

const uri = mongod.getUri();

console.log(uri);

// The Server can be stopped again with
// await mongod.stop();
