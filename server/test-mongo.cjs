const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const uri = process.env.MONGO_URI || "mongodb+srv://dosgonzalesraphael_db_user:xV1IKKQDBa7ZMoBG@cluster0.5rsdqdv.mongodb.net/incluimais?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  const client = new MongoClient(uri, { 
    serverApi: ServerApiVersion.v1,
    tls: true,
    tlsAllowInvalidCertificates: false,
  });
  
  try {
    console.log("🔌 Connecting to MongoDB Atlas...");
    await client.connect();
    console.log("✅ Connected successfully!");
    
    // List databases
    const adminDb = client.db().admin();
    const databases = await adminDb.listDatabases();
    console.log("\n📊 Available databases:");
    databases.databases.forEach(db => {
      console.log(`   - ${db.name} (${(db.sizeOnDisk / 1024 / 1024).toFixed(2)} MB)`);
    });
    
    // Test database and collection
    const db = client.db("incluimais");
    const collections = await db.listCollections().toArray();
    console.log("\n📁 Collections in 'incluimais' database:");
    if (collections.length === 0) {
      console.log("   (No collections found - will be created on first insert)");
    } else {
      collections.forEach(col => console.log(`   - ${col.name}`));
    }
    
    // Count users if collection exists
    const usersCollection = db.collection("users");
    const userCount = await usersCollection.countDocuments();
    console.log(`\n👥 Users in 'users' collection: ${userCount}`);
    
    if (userCount > 0) {
      const users = await usersCollection.find().limit(3).toArray();
      console.log("\n📋 Sample users (first 3):");
      users.forEach((u, i) => {
        console.log(`   ${i + 1}. ${u.nome} (${u.email})`);
      });
    }
    
    // Test write operation
    console.log("\n🧪 Testing write operation...");
    const testDoc = {
      _test: true,
      timestamp: new Date(),
      message: "Connection test"
    };
    const testCollection = db.collection("_test");
    const result = await testCollection.insertOne(testDoc);
    console.log(`✅ Test document inserted with ID: ${result.insertedId}`);
    
    // Clean up test document
    await testCollection.deleteOne({ _id: result.insertedId });
    console.log("🧹 Test document cleaned up");
    
    console.log("\n🎉 All tests passed! MongoDB connection is working correctly.");
    
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
    if (error.message.includes("authentication")) {
      console.error("   → Check your MongoDB Atlas username/password");
    } else if (error.message.includes("network")) {
      console.error("   → Check your IP whitelist in MongoDB Atlas Network Access");
    } else if (error.message.includes("timeout")) {
      console.error("   → Check your internet connection");
    }
    process.exit(1);
  } finally {
    await client.close();
    console.log("\n🔌 Connection closed.");
  }
}

testConnection();

