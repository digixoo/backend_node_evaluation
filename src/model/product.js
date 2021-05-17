const schema = require('./model')
const mongoose = require('mongoose');

function guardar(entity){
    console.log(entity)
  
    const Model = mongoose.model('product', schema.Product);
    const product = new Model(entity);
  
    // console.log('método guardar')   
    product.save();
  }  


module.exports = {
    guardar
};