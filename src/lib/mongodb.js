const { MongoClient } = require("mongodb");


if (!global._MongoClientPromise) {
    const mdClient = new MongoClient(process.env.MONGODB_URI, { /*useNewUrlParser: true, useUnifiedTopology: true */})
    global._MongoClientPromise = mdClient.connect();
}
let _MongoClientPromise = global._MongoClientPromise

export default _MongoClientPromise
