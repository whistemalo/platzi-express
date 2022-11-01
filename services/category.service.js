const boom = require('@hapi/boom');
const { randProductCategory, randImg } = require('@ngneat/falso');

class CategoryService {
  constructor() {
    this.category = [];
    this.generator();
  }

  generator() {
    const limite = 100;
    for (let i = 1; i <= limite; i++) {
      this.category.push({
        id: `s${i}`,
        name: randProductCategory(),
        image: randImg(),
      });
    }
  }

  async getCategories() {
    return this.category;
  }

  async createCategories(category) {
    console.log(category)
    const createCategory = {
      id: this.category.length + 1,
      ...category,
    };
    this.category.push(createCategory);
    return createCategory;
  }

  async find(id) {
    const category = this.category.find((category) => category.id === id);
    if (!category) {
      throw boom.notFound('Categoria no econtrada');
    }
    return category;
  }

  async update(id, category) {
    const index = this.category.findIndex((category) => category.id === id);
    if (index === -1) {
      throw boom.notFound('Categoria no encontrada');
    }
    const categoryOld = this.category[index];
    this.category[index] = {
      ...categoryOld,
      ...category,
    };
    return this.category[index];
  }
  async delete(id) {
    const index = this.category.findIndex((category) => category.id === id);
    if (index === -1) {
      throw boom.notFound('Categoria no encontrada');
    }
    this.category.splice(index, 1);
    return { id };
  }
}

module.exports = CategoryService;
