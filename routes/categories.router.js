const express = require('express');
const CategoryService = require('../services/category.service');
const {
  createCategorySchema,
  updateCategorySquema,
  getCategorySchema,
} = require('../schemas/categories.schema');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res) => {
  const categories = await service.getCategories();
  res.status(200).json(categories);
});

router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.find(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body  = req.body;
      const newCat = await service.createCategories(body);
      res.status(201).json(newCat);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(updateCategorySquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      res.status(200).json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(201).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
