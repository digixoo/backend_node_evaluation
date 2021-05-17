const express = require('express');
const router = express.Router();

const productos = require('../components/Controller/productos');

router.get('/products/', productos.listar)
router.get('/products/:id', productos.obtenerId)
router.post('/products/', productos.insertar)
router.put('/products/:id', productos.actualizar)
router.delete('products/:id', productos.borrar)

module.exports = router;

