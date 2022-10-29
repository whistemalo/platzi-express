const express = require('express');

const ProductService = require('../services/product.service');
const ValidatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema } = require('../schemas/product.schema');

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

router.get('/:id',
  ValidatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findProductById(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});
// la informacion en post llega desde BODY!
router.post('/',
  ValidatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  const { body } = req;
  const newProduct = await service.createProduct(body);
  res.status(201).json(newProduct);
});

router.patch('/:id',
  ValidatorHandler(updateProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    res.status(201).json(await service.updateProduct(id, body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
  ValidatorHandler(deleteProductSchema, 'params'),
  async (req, res) => {
  const { id } = req.params;
  res.status(200).json(await service.deleteProduct(id));
});



module.exports = router;
