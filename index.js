const express = require('express');

const app = express();
const PORT = 6006;

const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();


app.get('/',(req,res)=>{
    res.send('Hello World');
})

MongoClient.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
.catch((error)=>{
    console.log('err',error)
});
app.listen(PORT,()=>{
    console.log(`App Listening on Port ${PORT}`)
})