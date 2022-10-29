const express = require('express');

const ProductService = require('../services/product.service');

const router = express.Router();
const service = new ProductService();

//para enviar datos por post se puede utilizar localhost/users?limit=10&offset=20
router.get('/', async (req, res) => {
  const productos = await service.listProducts();
  res.status(200).json({ productos });
});

router.get('/filter', async (req, res) => {
  res.status(200).send('yo soy el filtro');
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.findProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { body } = req;
  const newProduct = await service.createProduct(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    res.status(201).json(await service.updateProduct(id, body));
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  res.status(200).json(await service.deleteProduct(id));
});



module.exports = router;
