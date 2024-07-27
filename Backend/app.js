const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors= require('cors');
const app = express();
// middlewarre section
app.use(express.json());
app.use(cors());
app.use("/books",router)

mongoose.connect("mongodb+srv://admin:MA47t0BVSNqFE6ol@cluster0.3qmsmaa.mongodb.net/book_store?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected to Databse"))
.then(() => {
    app.listen(5000);
}).catch((err)=>console.log(err));  


// 