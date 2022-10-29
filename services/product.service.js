const { randProduct } = require('@ngneat/falso');
const { randUuid } = require ('@ngneat/falso');

class ProductService {
  constructor() {
    this.products = [];
    this.generator();
  }

  generator() {
    const limite = 100;

    for (let i = 0; i < limite; i++) {
      this.products.push(randProduct());
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
      throw new Error('Producto no encontrado');
    }
    return this.products.find((product) => product.id === id);
  }
  async listProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });

  }
  async updateProduct(id, product) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Producto no encontrado');
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
      throw new Error('Producto no encontrado');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductService;
