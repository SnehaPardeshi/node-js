const express= require('express');
//const router = require('./router/userRoute.js')
const connectToDB = require('./connectDB/connectToDB.js');
const router = require('./router/router.js');

const app = express();

app.use(express.json()); 
app.use('/', router);

connectToDB();

app.listen(3001,()=>{
    connectToDB();
    console.log("Connected To server")
});