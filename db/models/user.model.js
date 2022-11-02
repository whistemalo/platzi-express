const {Model, DataTypes, Sequelize } = require('sequelize')

const USER_TABLE = 'users';
const UserSchema =  {
  id: {
    allowNulll: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNulll: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNulllL: false,
    type: DataTypes.STRING
  },
  //TIMESTAMP
  createdAt: {
    allowNulll: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate(){
    //associate

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = {USER_TABLE, UserSchema, User}




















