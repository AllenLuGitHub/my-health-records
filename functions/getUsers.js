const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config()

async function getUsers() {
    const uri = process.env.MONGO_CONNECTION;
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    // Connect to the client and query
    await client.connect();
  
  
    const cursor = client
      .db('UserDatabase')
      .collection('userInfo')
      .find();
  
    const results = await cursor.toArray();
    client.close();
    return results;
  }

  module.exports = getUsers