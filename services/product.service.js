
const { randNumber } = require ('@ngneat/falso');
const { randUuid } = require ('@ngneat/falso');
const { randImg } = require ('@ngneat/falso');
const { randProductName } = require ('@ngneat/falso');
const { randBoolean } = require ('@ngneat/falso');
const boom = require('@hapi/boom');

class ProductService {
  constructor() {
    this.products = [];
    this.generator();
  }

  generator() {
    const limite = 100;

    for (let i = 0; i < limite; i++) {
      this.products.push({
        id: randUuid(),
        name: randProductName(),
        price: randNumber({ min: 10, max: 1000 }),
        image: randImg(),
        isBlock: randBoolean(),
      });
    }
  }

  async createProduct(product) {
    const newProduct = {
      id: randUuid(),
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  async findProductById(id) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw boom.notFound('Producto no encontrado');
    }

    if (product.isBlock) {
      throw boom.conflict('Producto bloqueado');
    }

    return product;
  }
  async listProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 100);
    });

  }
  async updateProduct(id, product) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Producto no encontrado para avtualizar');
    }
    const productOld = this.products[index];
    this.products[index] = {
      ...productOld,
      ...product,
    };
    return this.products[index];
  }
  async deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Producto no encontrado');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductService;
