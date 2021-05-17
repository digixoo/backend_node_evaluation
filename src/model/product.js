const schema = require('./model')
const mongoose = require('mongoose');
const collection = 'product'

function guardar(entity){  
    const Model = mongoose.model(collection, schema.Product);
    const product = new Model(entity);
  

    product.save(function (err, product) {
      if (err) return console.error(err);
      product.speak();
    });
  } 
  
  async function listar(){
    const Model = mongoose.model(collection, schema.Product);
    let products = null;

    await Model.find(function (err, collection) {
      if (err){
        console.error(`error: ${err}`);
      }
      else{
        products = collection;
        // console.log(`collection: ${collection}`);
      }

    })
    
    return products;
  }

  async function obtener(id){
    const Model = mongoose.model(collection, schema.Product);
    let product = null;

    if (mongoose.isValidObjectId(id)){
      await Model.find({ _id: id }, function (err, collection) {
        if (err){
          console.error(`error: ${err}`);
        }
        else{
          product = collection;
          // console.log(`collection: ${collection}`);
        }

      })
    }
    else{
      console.err(`error al obtener producto, id ${id} no es valido`)
    }
    
    return product;
  }
  


module.exports = {
    guardar,
    listar,
    obtener
};