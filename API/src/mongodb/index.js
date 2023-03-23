const {mongoClient, MongoClient} = require('mongodb')
const mongoose = require('mongoose')

async function connect(){
    try{
        const uri=process.env.DB_URI;
        // const client=new MongoClient(uri);
        // created connection
        // await client.connect();
        await mongoose.connect(`${uri}/${process.env.DB_NAME}`);
        console.log('connected to mongodb successfully with mongoose')

        // created database on mongodb
        // const db = client.db(process.env.DB_NAME);
        // created collection on mongodb and inserted data into it
        // await db.collection('testCollection').insertOne({id:100,name:'test',email:'example@gmail.com'});
        // console.log('data inserted successfully')
    }
    catch(e){
        console.log('failed to connect mongodb'+e)
    }
}
module.exports=connect;

// required
// 1. database driver-> npm install mongodb
// 2. ORM/ODM -> mongoose
// 3.CUSTOM ENVIRONMENT: npm i dotenv
// .env
// .env .production