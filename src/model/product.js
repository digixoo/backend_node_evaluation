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
  
  async function actualizar(id, entity){  
    const Model = mongoose.model(collection, schema.Product);

    console.log(entity)
    if (mongoose.isValidObjectId(id)){
      const res = await Model.updateOne({ _id: id }, entity);
      console.log(`n: ${res.n}`);
      console.log(`nM: ${res.nModified}`)
      if (res.nModified === 1){           
        console.log("modificado")
        return true;          
      }
      else
      {
          console.log("no modificado")
          return false;
      }
          
    }
  } 


module.exports = {
    guardar,
    listar,
    obtener,
    actualizar
};