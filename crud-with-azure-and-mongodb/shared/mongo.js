const { MongoClient } = require("mongodb");

const config = {
    url: "mongo://localhost:27017/crud-servless-mongodb",
    dbname: "crud-servless-mongodb"
};

async function createConnection() {
    const connection = await MongoClient.connect(config.url, {
        useNewUrlParser: true
    });

    const db = connection.db(config.dbname);
    return {
        connection,
        db
    };
}

module.exports = createConnection;