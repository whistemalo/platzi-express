const boom = require('@hapi/boom');
const {
  randUuid,
  randFirstName,
  randLastName,
  randPassword,
} = require('@ngneat/falso');
const lodash = require('lodash');

const getConnection = require('../lib/postgres')

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
     const client = await getConnection();
     const rta = await client.query('SELECT * FROM task');
     return rta.rows;
  }

  async createUser(user) {
    const createNewUser = {
      id: randUuid(),
      ...user,
    };
    this.user.push(createNewUser);
    return createNewUser;
  }

  async findUserById(id) {

    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw boom.notFound('Usuario no encontrado');
    }
    return user;
  }

  async updateUserByI(user, id) {
    const index = this.users.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Usuario no encontrado');
    }
    const userOld = this.users[index];
    this.users[index] = {
      ...userOld,
      ...user,
    };
    return this.user[index];
  }

  async deleteUserById(id) {
    const index = this.users.findIndex((product) => product.id === id);
    if (index === -1) {
      console.log('retorna');
      throw boom.notFound('Usuario no encontrado');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UserService;
