import * as dotenv from 'dotenv';
dotenv.config()
import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const PORT = process.env.PORT;
const Mongo_Url="mongodb://127.0.0.1";
const client= new MongoClient(Mongo_Url); //dial
await client.connect();//call
console.log("Mongo is connected");
const Timestamp = Date.now();
const date = new Date()
const hours  = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();
// console.log(second)
// console.log(minutes)
// console.log(hours)
// http://localhost:5787;

app.get("/time", function (request, response) {
  response.send(`current time stamp  hours ${hours} : minutes ${minutes} : second ${second}`)
});


app.post("/time", function (request, response) {
  response.send(`current time stamp  hours ${hours} : minutes ${minutes} : second ${second}`)
});



app.listen(PORT,()=>console.log(`The server started on ${PORT}`))