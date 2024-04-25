const express = require("express");
const productsRouter = require("./routes/productsRoutes.js");
const usersRouter = require("./routes/userRoutes.js");
const reviewRouter = require("./routes/reviewRoutes.js");

const app = express();
const mongoose = require("mongoose");
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/review", reviewRouter);

// const url='mongodb+srv://abhithakur8808:243Ha6R5qqVec15o MongoDb@backenddb.s9aopqm.mongodb.net/Amazon-Backend?retryWrites=true&w=majority&appName=BackendDb'
const url =
  "mongodb+srv://abhithakur8808:243Ha6R5qqVec15o@backenddb.s9aopqm.mongodb.net/Amazon-backened?retryWrites=true&w=majority&appName=BackendDb";

// const databaseUser='abhijeetsingh';
// const databasePassword='243Ha6R5qqVec15o MongoDb';
// const databaseName='Amazon-Backend';

// let dbLink=url.replace("$USERNAME$",databaseUser);
// dbLink=dbLink.replace("$PASSWORD$",databasePassword);
// dbLink=dbLink.replace("$DB_NAME$",databaseName);

mongoose.connect(url).then(() => console.log("Database Connected!"));

app.listen(3000, () => console.log("-------app started----------"));
