const mongoose = require('mongoose');


const URL = 'mongodb+srv://snehasp2004:BLNTWW6o4JIJqzQP@cluster0.9i79fce.mongodb.net/'

const connectToDB = () =>{
    mongoose.connect(URL)
    console.log("Connected to DB")
}

module.exports = connectToDB;