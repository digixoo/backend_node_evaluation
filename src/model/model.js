const dotenv = require("dotenv")
const mongoose = require('mongoose');


dotenv.config()



mongoose.connect(`${process.env.MONGO_CONNECTION}://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`, {
                            useNewUrlParser: true, 
                            useUnifiedTopology: true, 
                            auth: {
                                user: process.env.MONGO_USER,
                                password: process.env.MONGO_PASSWORD
                            }});


const Product = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    categoryId: String,
    image: String
  });

const Category = new mongoose.Schema({
    name: String,  
    image: String
  });


module.exports = {
    Product,
    Category
}

