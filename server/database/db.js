import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {

const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-f7umbin-shard-00-00.5kdb7ep.mongodb.net:27017,ac-f7umbin-shard-00-01.5kdb7ep.mongodb.net:27017,ac-f7umbin-shard-00-02.5kdb7ep.mongodb.net:27017/?ssl=true&replicaSet=atlas-zok7wu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true});
        console.log("Database Connected Successfully!!");
    }
    catch(error){
        console.log('Database Connection Failed ', error.message);
    }
}

export default Connection;