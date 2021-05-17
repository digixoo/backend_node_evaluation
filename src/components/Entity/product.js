const Joi = require('joi'); 
const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(1)
        .max(50),
    price: Joi.number()
        .integer()
        .min(1)
        .max(99999999),
    description: Joi.string()
        .min(1)
        .max(150),
    categoryId: Joi.number()
        .integer()
        .min(1)
        .max(99999999)
        .required(),
    image: Joi.string()});

function schemaValidate(entity){
    const { error, value } = schema.validate(entity);
    const valid = error == null;

    console.log(`error: ${error}`);
    console.log(`value: ${value}`);

    if(!valid){
        return {
            isValid: false,
            body: error                
        };
    }
    else{
        return {
            isValid: true,
            body: value
        };
    }
}

exports.validate = function(product){
    
    return schemaValidate(product);
}