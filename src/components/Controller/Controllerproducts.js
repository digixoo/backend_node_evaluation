const express = require('express');
const product = require('../Entity/product');
const response = require('../../network/response');
const db = require('../../model/product');

async function listar(req, res){     
    let datos = await db.listar()

    response.success(req, res, datos)
    // if(req.query.error == 'ok')
    // {        
    //     response.error(req, res, 'Prueba de error', 403, 'Error Simulado');
    // }
    // else{
    //     response.success(req, res, 'No hay problema');
    // }     
  };


  async function obtenerId(req, res){     
    let id = req.params.id;

    let datos = await db.obtener(id);

    response.success(req, res, datos);
  };

  function insertar(req, res){
    console.log(req.body);

    let entity = product.validate(req.body);

    if(entity.isValid == true)
    {        
        db.guardar(req.body);
        response.success(req, res, 'Producto ingresado', 201);
    }
    else
    {
        response.error(req, res, 'ocurrio un error', entity.body, 500);
    }
  }

  async function actualizar(req, res){   
    let id = req.params.id;
    let entity = product.validate(req.body);

    if(entity.isValid){
      let result = await db.actualizar(id, req.body);
      if(result){
        response.success(req, res, 'Producto modificado', 201)
      }
      else{
        response.success(req, res, 'Producto no encontrado', 200)
      }
    }
    else{
      response.error(req, res, 'Datos no cumplen con estructura correcta', 400);
    }
    

   
  }

  function borrar(req, res){
      console.log(req.body);
      response.success(req, res, 'borrado');
  }


module.exports = {
    listar,
    obtenerId,
    insertar,
    actualizar,
    borrar
};