const boom = require('@hapi/boom');
const {
  randUuid,
  randFirstName,
  randLastName,
  randPassword,
} = require('@ngneat/falso');
const lodash = require('lodash');

// const getConnection = require('../lib/postgres')
//resulta que cada vez que en sequializa
const {models} = require('../lib/sequelize')
class UserService {
  constructor() {
    (this.users = []), this.generator();
  }

  generator() {
    const limite = 100;
    for (let i = 0; i <= limite; i++) {
      this.users.push({
        id: randUuid(),
        name: `${randFirstName()} ${randLastName()}`,
        password: randPassword(),
        role: lodash.sample(['user', 'admin']),
      });
    }
  }

  async listUsers() {
     const rta = await models.User.findAll();
     return rta;
  }

  async createUser(user) {
    const createNewUser = await models.User.create(user)
    return createNewUser;
  }

  async findUserById(id) {

    const user = await models.User.findByPk(id)
    if (!user) {
      throw boom.notFound('Usuario no encontrado');
    }
    return user;
  }

  async updateUserByI(id, changes) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('Usuario no encontrado');
    }
    const rta = await user.update(changes)
    return rta

    // const index = this.users.findIndex((product) => product.id === id);
    // if (index === -1) {
    //   throw boom.notFound('Usuario no encontrado');
    // }
    // const userOld = this.users[index];
    // this.users[index] = {
    //   ...userOld,
    //   ...user,
    // };
    // return this.user[index];
  }

  async deleteUserById(id) {
     const user = await models.User.findByPk(id);
     if (!user) {
       throw boom.notFound('Usuario no encontrado');
     }
     await user.destroy()
    return { id };
  }
}

module.exports = UserService;
