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
 
Product.methods.speak = function () {
  const alert = this.name
    ? `Producto guardado ${this.name}`
    : 'Producto no guardado: nombre no encontrado';
  console.log(alert);
}

const Category = new mongoose.Schema({
    name: String,  
    image: String
  });


module.exports = {
    Product,
    Category
}

