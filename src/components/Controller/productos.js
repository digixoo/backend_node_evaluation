const express = require('express');
const response = require('../../network/response');


function listar(req, res){     
    response.success(req, res, 'La lista de productos es: 1,2,3,4,5,6')
    // if(req.query.error == 'ok')
    // {        
    //     response.error(req, res, 'Prueba de error', 403, 'Error Simulado');
    // }
    // else{
    //     response.success(req, res, 'No hay problema');
    // }     
  };


  function obtenerId(req, res){     
    response.success(req, res, `El id entregado es ${req.params.id}`);

  };

  function insertar(req, res){
      console.log(req.body);
      response.success(req, res, 'insertado');
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