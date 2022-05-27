const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    firstname: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    lastname: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    fathersname: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    },
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
