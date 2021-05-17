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

    console.log(id)

    let datos = await db.obtener(id);

    response.success(req, res, datos);
  };

  function insertar(req, res){
    console.log(req.body);

    let entity = product.validate(req.body);

    if(entity.isValid == true)
    {        
        db.guardar(req.body);
        response.success(req, res, 'insertado');
    }
    else
    {
        response.error(req, res, 'ocurrio un error', 500, entity.body);
    }
  }

  function actualizar(req, res){
      console.log(req.body);
      response.success(req, res, 'actualizado');
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