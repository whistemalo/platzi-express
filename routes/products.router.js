const express = require('express');
const { randProduct } = require('@ngneat/falso');

const router = express.Router();

router.get('/', (req, res) => {
  const productos = [];
  const { size } = req.query;
  const limite = size ? parseInt(size) : 10;

  for (let i = 0; i < limite; i++) {
    productos.push(randProduct());
  }
  res.json({ productos });
});

router.get('/filter', (req, res) => {
  res.send('yo soy el filtro');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    producto: {
      nombre: `Producto ${id}`,
      precio: 100 * +id,
    },
  });
});

module.exports = router;
